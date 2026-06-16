---
title: "Project Atlas - Local-First Project Command Center"
description: "A Flutter desktop command center for tracking what is active, blocked, due today, and ready for phone handoff without cloud sync or telemetry."
date: 2026-06-11
tags: ["flutter", "local-first", "sqlite", "project-management", "workflow", "desktop"]
github: "https://github.com/ppeck1/project-atlas"
status: active
image: "/assets/project-shots/project-atlas/today.png"
imageAlt: "Project Atlas Today screen showing focus work, overdue items, phone queue, and blocked work."
featured: true
priority: 4
---

> **TL;DR:** Project Atlas is a local operational console for personal work. It answers the daily questions: what am I carrying, what is blocked, what needs action, and what should go to my phone?

## Problem

Personal project work often scatters across notes, terminals, chats, and half-remembered obligations. The problem is not only task storage. It is operational visibility.

Project Atlas is built around that visibility:

- Today: focus, overdue, due-today, phone queue, blocked, and high-priority work
- Projects: active project tracking and lifecycle metadata
- Library: documents, drafts, filters, and local file actions
- Settings: integrations, logs, export tools, contacts, and admin controls

## Local-First Posture

The app stores data locally in SQLite through Drift. The README states there is no cloud sync and no telemetry. Optional integrations such as Ollama summaries and Telegram handoff remain user-reviewed.

![Project Atlas Projects screen](/assets/project-shots/project-atlas/projects.png)

## Working Surfaces

The screenshots show an application built for repeated use rather than presentation:

![Project Atlas Library screen](/assets/project-shots/project-atlas/library.png)

![Project Atlas Settings screen](/assets/project-shots/project-atlas/settings.png)

## What This Demonstrates

- Local-first product design with practical workflow density
- SQLite/Drift application structure
- Human-reviewed AI and phone handoff integrations
- A direct bridge between personal operations and visible software artifacts
