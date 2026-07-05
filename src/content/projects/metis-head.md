---
title: "Metis Head - Safe Prototype for a Voice Assistant"
description: "A simulated assistant dashboard for testing voice commands, tool review, and memory access before any real microphone, camera, or hardware exists."
date: 2026-06-11
tags: ["systems", "agent-governance", "voice", "simulation", "tooling", "python", "safety"]
github: "https://github.com/ppeck1/metis-head"
repo: "ppeck1/metis-head"
pinned: true
status: active
image: "/assets/project-shots/metis-head/dashboard-public.png"
imageAlt: "Metis Head mock Brain dashboard showing simulated voice trace and governed tool review state."
featured: true
priority: 2
links:
  - label: "Visual concept"
    url: "/assets/project-shots/metis-head/visual-representation.png"
---

> **TL;DR:** Metis Head is a safe test bench for a future voice assistant. It shows how voice commands, tool requests, and memory look in the interface while keeping all hardware and risky actions simulated.

## What it is

Metis Head is a dashboard and mock assistant runtime for a radio-like device concept. The public repo does not contain a real microphone, camera, or hardware controller. That is intentional: the project tests the control model before the device exists.

The dashboard makes the boundaries visible:

- no real microphone, camera, or hardware in the public repo
- deterministic mock providers for external systems
- tool actions routed through review states
- a read-only BOH bridge that never mutates Bag of Holding
- voice trace events that are redacted before dashboard display

## What the screenshots show

![Metis visual representation](/assets/project-shots/metis-head/visual-representation.png)

The project is organized around a mock Brain and dashboard. The dashboard shows simulated state, tool review status, and safe voice-event metadata.

The public media intentionally includes both a physical radio reference and a planned visual representation, because the form factor matters: this is not a general chatbot UI. It is a radio-first interface experiment.

![Metis radio reference](/assets/project-shots/metis-head/radio-reference.jpg)

## Why it matters

The central rule is that voice and tools remain mediated. Simulated voice commands can create safe events, request spoken responses, or surface review state, but they do not become standing approval. The dashboard shows redacted voice-command and confirmation events rather than raw transcript text.

That makes Metis useful as a portfolio artifact because it shows the boundary work around AI interaction, not just the prompt surface.

## Current Signal

The repository README reports Phase 0AY as the current phase, focused on voice trace dashboard visibility, public media, and hardware-parity analyzer presentation tuning. Verification in the repo is listed as 271 passing tests under Python 3.11.

## What This Demonstrates

- Simulation-first architecture before hardware commitments
- Redacted voice event handling
- Tool review instead of tool auto-execution
- Public media and dashboard proof for a prototype that is still honest about what is mocked
