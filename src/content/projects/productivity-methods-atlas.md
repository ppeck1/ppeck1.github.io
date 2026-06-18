---
title: "Productivity Methods Atlas - Diagnostic Method Selection"
description: "An interactive atlas for choosing productivity, workflow, and governance methods by failure mode instead of tool fashion."
date: 2026-06-18
tags: ["knowledge-architecture", "interactive", "decision-systems", "workflow", "governed-data"]
status: active
github: "https://github.com/ppeck1/productivity-methods-atlas"
demo: "/demo/productivity-methods-atlas/"
image: "/assets/project-shots/productivity-methods-atlas/atlas-preview.svg"
imageAlt: "Productivity Methods Atlas preview showing diagnostic method matching, method counts, failure patterns, and selection lenses"
featured: true
priority: 8
links:
  - label: "Standalone GitHub Pages demo"
    url: "https://ppeck.me/productivity-methods-atlas/"
---

## What it is

An interactive diagnostic atlas for productivity methods. The core move is simple:

> Diagnose the failure substrate before choosing a method.

The atlas groups productivity, workflow, governance, cognition, safety, and feedback methods by the problems they actually solve. It treats methods as decision tools, not identities or aesthetics.

## Current shape

- 30 method families
- 15 failure patterns
- 8 diagnostic selection lenses
- 1 constraint-first operating model
- Searchable method and anti-pattern catalogs
- Method chooser and failure matrices
- Standalone static HTML demo
- Structured JSON source data and MethodCards

## Why it matters

Most productivity systems fail because they prescribe behavior before identifying whether the actual problem is constraint, flow, cognition, state, authority, safety, knowledge, or feedback.

This atlas asks a better first question: what kind of system failure is this?

## Architecture

The public repo separates generated presentation from source data:

- JSON stores method records, anti-patterns, source notes, selection rules, and matrices
- MethodCards preserve method-level records with advisory metadata
- Markdown keeps doctrine and schema notes readable
- A Python build script compiles the standalone HTML demo
- Integrity tests check source counts and demo presence

The private ingestion material from the original local workspace was not published. The public repo keeps the useful knowledge architecture while removing host-system implementation details.

## What This Demonstrates

Knowledge architecture for messy human systems. Evidence-aware framing. Interface design for browsing, comparing, and selecting methods. Publication discipline: public artifact separated from private implementation context.

---

## Try It

<div class="demo-embed">
  <div class="demo-bar">
    <span>Productivity Methods Atlas - diagnostic method selection</span>
    <a href="/demo/productivity-methods-atlas/" target="_blank" rel="noopener">Open full screen -&gt;</a>
  </div>
  <iframe
    src="/demo/productivity-methods-atlas/"
    width="100%"
    height="760"
    title="Productivity Methods Atlas interactive demo"
    loading="lazy"
  ></iframe>
</div>
