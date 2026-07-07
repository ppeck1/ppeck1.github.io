---
title: "Connecting a Local-First Project System to ChatGPT with MCP"
description: "A field note on exposing Project Atlas to ChatGPT through a narrow OAuth-gated MCP connector without widening the local system's trust boundary."
date: 2026-07-07
tags: ["Project Atlas", "MCP", "local-first", "AI", "governance"]
draft: false
image: "/assets/blog/project-atlas-mcp-connector.png"
imageAlt: "ChatGPT successfully calling a read-only Project Atlas MCP connector."
---

## The Connector Was Visible, but the Tools Weren't

This was the first successful live smoke test of a ChatGPT connector talking to Project Atlas through MCP.

The path now works like this:

```text
ChatGPT
-> OAuth-linked connector
-> HTTPS MCP tunnel
-> local Project Atlas HTTP MCP gateway
-> Project Atlas stdio MCP server
-> local Project Atlas data
```

The important part is not only that it connected.

The important part is that it connected through a deliberately narrow, read-only surface.

Only three remote tools were exposed:

```text
list_projects
get_project_status
atlas.workload_snapshot
```

Everything else stayed blocked: queues, proposals, enrichment, GitHub refresh, task context, work-item context, project briefs, and writes.

That boundary was the point.

This was not an attempt to let ChatGPT operate Project Atlas broadly. It was a first controlled slice: prove that ChatGPT could reach a local-first project system through MCP, authenticate correctly, discover only approved tools, and call one safe status endpoint without widening the trust boundary.

## Where the Problem Started

Project Atlas already had a local MCP server.

Local coding agents could speak to it through a stdio process. That was the right shape for tools running on the same machine. The app could launch the MCP server locally, expose its tool list, and serve Atlas project data without putting anything on the network.

But ChatGPT cannot call a private Windows stdio process directly.

A ChatGPT connector needs a remote MCP endpoint reachable over HTTPS. It also needs an authentication flow the connector understands. That meant the existing local MCP server was necessary, but not sufficient.

The goal became:

```text
keep the local stdio server
wrap it with a small HTTP MCP gateway
put an HTTPS tunnel in front of the gateway
require OAuth before any MCP request is accepted
filter the remote tool list down to a tiny allowlist
```

That architecture let the local-first system stay local while still giving ChatGPT a controlled connector surface.

The desktop app was not exposed.

The database was not exposed.

The file system was not exposed.

The raw stdio process was not exposed.

Only the gateway was reachable, and the gateway was intentionally boring.

## Why the Gateway Existed

The gateway had three jobs.

First, it translated remote MCP requests into local stdio MCP calls.

Second, it filtered tool discovery. The full local Project Atlas MCP server had many tools. The remote connector did not need most of them. The remote list had to be smaller than the local list by design.

Third, it enforced the boundary even if a client tried to bypass discovery. Hiding a tool from `tools/list` was not enough. A hidden tool also had to be rejected if it was called directly.

That distinction matters.

A safe connector cannot rely on the client only calling what it was shown. The server has to enforce the allowlist on both discovery and invocation.

So the gateway had to prove two things:

```text
denied tools are not listed
denied tools are still rejected if called directly
```

That became one of the core smoke-test requirements.

## The First Version Was Too Broad

The first gateway slice worked locally, but the review exposed several problems.

It used static bearer auth instead of a proper OAuth/JWKS flow.

The remote allowlist was still too broad.

The tests were local smoke tests, not a real ChatGPT connector path.

The gateway launched a fresh stdio process per request.

The test coverage showed that denied tools were not exposed, but it did not yet prove the final remote boundary I wanted.

That was a useful failure.

The system was technically moving, but it had not yet earned the trust implied by a live ChatGPT connector.

So the surface was narrowed.

The allowlist was reduced to three read-only tools:

```text
list_projects
get_project_status
atlas.workload_snapshot
```

The rest remained local-only.

That included writes, queue operations, proposal generation, enrichment, GitHub refresh, task context, work-item context, and project briefs.

This was the first major design correction: do less remotely.

## Tightening the Transport

After narrowing the tool surface, the transport needed to become less casual.

The gateway added several constraints:

```text
origin validation on /mcp
no unsafe all-interface binding by default
HTTPS resource URLs required outside localhost smoke tests
protected-resource metadata for the MCP path
explicit connection-close behavior for compatibility
request size limiting
```

These were not glamorous changes, but they are the kind of changes that matter when a local-first system gets any remote-facing edge.

The connector path was supposed to be narrow, authenticated, and observable.

Not clever.

Not expansive.

Just enough to support a real end-to-end test.

## The Maze State

The most confusing part was that the connector looked almost right before it actually worked.

ChatGPT could see a Project Atlas connector namespace.

That made it feel like the connection had succeeded.

But there were no invokable functions.

That was the deceptive state.

The connector existed, but MCP initialization was still failing. Tool discovery never completed, so ChatGPT had a namespace without usable tools.

That narrowed the debugging problem.

The tunnel logs showed requests reaching the machine.

The gateway logs showed the actual failure:

```text
initialize -> 401 Unauthorized
```

That was the useful clue.

The gateway was running.

The tunnel was alive.

The tool allowlist was not the problem.

The problem was happening before tools were listed.

MCP initialization was failing because OAuth token validation was rejecting the request.

## The Bug That Unblocked It

The live OAuth provider issued JWTs with an issuer value ending in a trailing slash.

The gateway configuration had normalized the authorization server URL without that slash.

That meant these two values were treated as different issuers:

```text
https://issuer.example/
```

and

```text
https://issuer.example
```

The check was too literal.

The token signature could be valid. The request could be reaching the gateway. The connector could appear in ChatGPT. But initialization still failed because the issuer string comparison disagreed about one trailing slash.

The fix was intentionally narrow.

The gateway now compares issuer values with trailing-slash normalization, while still requiring:

```text
valid JWT signature
expected audience/resource
required atlas.read scope
expiry and issued-at claims
```

That distinction is important.

The fix did not weaken the trust model.

It did not skip issuer validation.

It did not allow arbitrary tokens.

It made issuer validation compatible with a common OAuth formatting detail while keeping the rest of the checks intact.

## The Successful Smoke Test

After the issuer normalization fix, the local smoke suite passed again:

```json
{
  "status": "ok",
  "tools": 3,
  "hiddenToolsRejected": 29,
  "deniedToolsExposed": []
}
```

That result mattered because it proved the final shape of the boundary:

```text
3 tools exposed remotely
29 hidden tools rejected
0 denied tools exposed
```

Then ChatGPT successfully called the live connector and invoked:

```text
Project_Atlas.list_projects
```

The gateway logs confirmed the intended flow:

```text
authenticated initialize succeeded
tools/list was served
tools/call list_projects was proxied
no write calls were observed
no queue calls were observed
no proposal calls were observed
no enrichment calls were observed
no GitHub refresh calls were observed
no task-context calls were observed
no work-item-context calls were observed
no project-brief calls were observed
```

That was the actual milestone.

Not "ChatGPT can access Atlas."

A more accurate description is:

ChatGPT can authenticate through a connector, complete MCP initialization, discover only three read-only Atlas tools, and call one safe project-list endpoint through a logged gateway without exposing the rest of the local system.

That is a smaller claim.

It is also the claim I wanted.

## What This Proved

This test proved a pattern:

```text
local-first app
-> local MCP server
-> narrow authenticated gateway
-> HTTPS tunnel
-> OAuth-linked ChatGPT connector
-> tiny read-only allowlist
```

It also proved a constraint:

A local-first system can have a remote AI-facing edge without turning itself into a broad cloud API.

That distinction matters for Project Atlas.

Atlas is a personal operations system. It contains project state, blockers, notes, decisions, and context that should not casually cross a remote boundary. Some of that information may be useful to summarize later, but usefulness is not the same as permission.

The first connector should not be powerful.

It should be inspectable.

The current connector can answer basic questions about projects and workload state. It cannot mutate queues. It cannot generate proposals. It cannot run enrichment. It cannot refresh GitHub data. It cannot inspect deep private project context.

That is not a limitation to rush past.

That is the safety property of the first milestone.

## What I Would Do Differently

The main lesson is that connector success has layers.

A visible connector namespace does not mean MCP initialization succeeded.

A reachable tunnel does not mean authentication is correct.

A passing local gateway test does not mean the live connector path works.

A filtered `tools/list` does not mean hidden tools are impossible to call.

Each layer needs its own proof.

For this connector, the useful checks were:

```text
unauthenticated requests fail
invalid tokens fail
tokens without the required scope fail
tokens for the wrong audience fail
hidden tools are not listed
hidden tools are rejected when called directly
only the three allowed tools appear remotely
sensitive fixture content is masked
initialize succeeds only after OAuth validation passes
```

The bug that finally unblocked the live path was small, but it sat at exactly the wrong point in the sequence.

Until `initialize` succeeded, nothing else mattered.

Tool discovery could not complete.

The connector could look present but remain unusable.

That is why the gateway logs mattered more than the connector UI.

## What Comes Next

The next steps should stay conservative.

First, keep the three-tool allowlist frozen until more review is done.

Second, turn the live run command into a clean operator script.

Third, add a startup health check that verifies the tunnel, gateway, and OAuth metadata together.

Fourth, add a clear stop command for shutting down the gateway and tunnel.

Fifth, review each possible new read tool for privacy leakage before exposing it.

Sixth, do not enable writes until there is a separate authorization and review model.

The temptation after a successful connector test is to expand quickly.

That is not the right next move here.

The win is not that ChatGPT can do everything.

The win is that ChatGPT can do one narrow thing safely, through a real connector, with logs and tests proving the boundary.

## Takeaway

The pattern that worked was slower than exposing a simple API.

It required a local stdio server, an HTTP MCP gateway, an HTTPS tunnel, OAuth validation, protected-resource metadata, issuer normalization, allowlist filtering, direct-call rejection, redaction tests, and live connector verification.

That extra structure was the point.

For a local-first project system, the safe milestone is not maximum capability.

The safe milestone is a small remote surface whose behavior can be explained, tested, and stopped.

Project Atlas now has that first slice.

Three tools.

Read-only.

OAuth-gated.

Logged.

Smoke-tested.

Connected.
