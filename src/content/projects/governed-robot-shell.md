---
title: "Governed Robot Shell - Safe Language-to-Action Prototype"
description: "A decoupled robot-control prototype where LLM output becomes intent proposal, passes a safety gate, and only then reaches bounded actuators—demonstrating constraint-aware reasoning before motion authority."
date: 2026-06-16
tags: ["robotics", "llm", "safety", "governance", "safety-gate", "audit-log", "python"]
github: "https://github.com/ppeck1/governed-robot-shell"
status: active
image: "/assets/project-shots/llm-robot-shell/governed-robot-shell-hero.jpg"
imageAlt: "Governed Robot Shell architecture diagram showing Perception, Parse, Intent, Planner, Safety Gate, and Subsystem Dispatch, with labels for Authority Boundary, Audit Log, and E-stop override."
featured: true
priority: 5
---

## What it is

A prototype decoupling LLM intelligence from direct actuator control. The core principle: intelligence should NOT automatically become actuator authority.

The pipeline is strict:

```text
Perception (input)
  ↓
Parse (structure)
  ↓
Intent (LLM reading)
  ↓
Planner (constraint-aware reasoning)
  ↓
Safety Gate (human/authority check)
  ↓
Subsystem Dispatch
  ↓
Actuator
```

## Safety Architecture

The safety gate model treats LLM output as a proposal, never as command.

- **Perception layer**: raw input from interface (CLI, dashboard, sensor events)
- **Parse layer**: convert input to controlled intent labels
- **Intent layer**: keyword→intent mapping; future LLM assistance
- **Planner layer**: finite action vocabulary (no raw servo angles, no GPIO direct calls)
- **Safety Gate layer**: state-aware approval/block using config-based rules
- **Subsystem dispatch**: routes approved actions to bounded backends
- **Actuator layer**: mock body by default; servo/hardware opt-in only

Every action is logged with full provenance: timestamp, raw input, intent, planned action, approval decision, reason, state snapshot.

## Hard Boundaries

Movement and locomotion remain blocked by design. The shell demonstrates expression-only movement (head turns, eyelid flutter) with bounded servo angles.

Hard override always available: E-stop and manual movement controls bypass normal pipeline without touching safety logic.

Unknown actions fail closed. Unrecognized intents default to safe idle behavior.

## What This Demonstrates

How to gate AI proposals through human authority and constraint models. How to separate intelligence (reasoning about what to do) from authority (permission to actually do it). That safety architecture, not safety prose, is what prevents accidents.
