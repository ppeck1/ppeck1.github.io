---
title: "Project Atlas - Local-First Project Command Center"
description: "A local Windows command center for accepted project state, next actions, evidence, and human-reviewed AI proposals."
date: 2026-06-11
tags: ["flutter", "local-first", "sqlite", "project-management", "workflow", "desktop"]
github: "https://github.com/ppeck1/project-atlas"
repo: "ppeck1/project-atlas"
pinned: true
status: active
image: "/assets/project-shots/project-atlas/today.png"
imageAlt: "Project Atlas Today screen showing focus work, overdue items, phone queue, and blocked work."
featured: true
priority: 2
portfolioGroup: selected
sourceVisibility: public
---

Project work scatters across notes, folders, terminals, and conversations. Project Atlas brings the accepted project state and the next justified action into one local Windows application.

## What I built

The Flutter desktop app uses Drift and SQLite to keep a durable working record. Capsule holds accepted intent, decisions, risks, and evidence. Today and Workboard turn that record into an execution view. Projects, Sources & Health, and Library keep supporting material available without flattening it into one summary.

Human edits to accepted project truth retain revision history and reject stale saves. Agent-originated changes enter a proposal queue; they cannot silently become accepted state.

## What the workflow makes visible

- What is accepted, what is proposed, and what has changed since the current view loaded.
- Which work is ready, blocked, stale, or waiting for a decision.
- Which local sources support a project and when they were last observed.
- Which optional integration is allowed to see or change which fields.

![Earlier Project Atlas project view](/assets/project-shots/project-atlas/projects.png)

This retained portfolio capture shows an earlier project view. The [current repository screenshots and capture manifest](https://github.com/ppeck1/project-atlas/tree/main/docs/screenshots) are the source for the latest interface and its public-safe demo evidence.

## Data and integration boundaries

The database stays local. Explicitly enabled integrations can transmit selected data. The trusted local MCP surface is separate from a narrower remote projection with authentication, operator-approved aliases, and a small tool allowlist. Integration secrets use the Windows secret-storage boundary described in the repository.

## Verification and limits

The repository includes migration, policy, adapter, service, and UI checks, Windows release builds, and a repository/release privacy audit. [Current CI](https://github.com/ppeck1/project-atlas/actions) and the [security policy](https://github.com/ppeck1/project-atlas/blob/main/SECURITY.md) record those boundaries.

This is a local desktop tool. Remote connector operation requires operator-managed configuration and authentication. Local-first storage does not make every optional integration offline or remove the need to protect the database.

## What this demonstrates

Desktop product design, versioned local data, explicit evidence and review state, stale-write protection, and constrained integration surfaces.
