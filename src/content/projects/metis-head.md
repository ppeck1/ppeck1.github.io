---
title: "Metis Head - Local Voice Assistant with Bounded Tools"
description: "A local assistant with browser push-to-talk, optional read-only Google connections, and allowlisted knowledge and project tools."
date: 2026-06-11
tags: ["systems", "agent-governance", "voice", "local-first", "tooling", "python"]
github: "https://github.com/ppeck1/metis-head"
repo: "ppeck1/metis-head"
pinned: false
status: active
image: "/assets/project-shots/metis-head/dashboard-public.png"
imageAlt: "Retained capture of the earlier Metis mock dashboard and tool review interface."
featured: true
priority: 2
links:
  - label: "Visual concept"
    url: "/assets/project-shots/metis-head/visual-representation.png"
portfolioGroup: research
sourceVisibility: public
---

Metis Head explores a practical question: how can a local voice assistant retrieve useful information without gaining broad authority over the systems around it?

## What I built

The current application supports typed conversations, browser push-to-talk, local speech processing, and bounded read-only tool routing. Google Calendar, Gmail, and Contacts are optional, account-specific integrations. Bag of Holding and Project Atlas reads use explicit tool allowlists.

Unavailable services report that they are unavailable. Mock providers remain available for deterministic tests; they are separate from configured live integrations.

## Where the boundaries sit

- Google access requires the relevant OAuth grant and stays read-only.
- Each browser tab has a bounded conversation session.
- BOH and Atlas tools remain behind server-side gates and allowlists.
- Write requests remain proposals rather than direct changes.
- Credentials, recordings, private commands, and local configuration stay outside the public source export.

The work is in those boundaries: resolving which account a request refers to, refusing ambiguous access, cancelling a voice turn cleanly, and making unavailable connections visible.

## Demonstration and evidence

![Earlier mock dashboard capture](/assets/project-shots/metis-head/dashboard-public.png)

This retained screenshot shows an earlier mock dashboard. It illustrates the review interface; it is not a capture of the current Google connection or browser voice flow. The radio image below is a physical form-factor reference, and the visual representation is a design concept.

![Radio form-factor reference](/assets/project-shots/metis-head/radio-reference.jpg)

The [repository README](https://github.com/ppeck1/metis-head#readme) records current implementation and verification evidence. It separates local execution, deterministic fixtures, and operator-confirmed microphone/output checks. Live Google consent remains an operator step.

## Current limits

This is a local personal-assistant prototype. Optional integrations require setup and grants. The public project does not establish a production healthcare deployment or validated hardware safety. OpenAI production chat remains deferred in the current implementation.

## What this demonstrates

Account-aware retrieval, explicit tool boundaries, cancellable voice workflows, and a clear distinction between a mocked test path and an enabled live service.
