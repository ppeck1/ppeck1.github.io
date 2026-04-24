---
title: "Bag of Holding — Constraint-Governed Knowledge Workbench"
description: "A local-first knowledge operating system for governed documents, reversible lifecycle management, and review-safe LLM integration. Built for environments where decisions carry consequence."
date: 2026-04-24
tags: ["systems", "knowledge-architecture", "constraint", "LLM", "governance", "local-first", "python", "fastapi", "sqlite"]
status: active
repo: "https://github.com/ppeck1/Bag-of-Holding"
demo: "https://ppeck.me"
---

> **TL;DR:** Bag of Holding is a local knowledge operating system, not a notes app. It governs documents through an explicit lifecycle, enforces canonical authority, detects conflicts deterministically, and gates LLM assistance behind mandatory human review. The architecture treats knowledge stewardship as a systems engineering problem — not a storage problem.

---

## Problem

Most knowledge tools optimize for retrieval.

Very few optimize for survivability.

In practice this means:

- decisions get made, but the reasoning behind them disappears
- conflicting documents silently coexist, neither flagged nor resolved
- "canonical" references drift into tribal memory
- stale constraints continue governing behavior long after they were superseded
- LLM assistance produces useful outputs that leave the underlying structure weaker than before

The result is familiar in high-stakes environments: a system that looks coherent on the surface while institutional memory quietly degrades underneath it.

This is the same class of failure CANON models at the operational layer — **visible stability coexisting with latent deterioration**. The problem is not that information is missing. The problem is that no system is preserving authority.

---

## Diagnosis

The failure is structural, not behavioral.

Standard tools collapse the problem into a single axis:

> Can I find what I need?

That is the wrong question for environments where trust and traceability matter.

The right questions are:

- What should actually be trusted here, and by whom?
- What conflicts with this, and has anyone addressed it?
- When did this become canonical, and what did it replace?
- What has the LLM proposed, and has a human reviewed it?

Most mainstream tools answer these questions by convention rather than architecture.

---

## Treatment

Bag of Holding re-frames knowledge management as a governed lifecycle rather than a searchable collection.

Every document moves through an explicit state progression:

```text
observe → vessel → constraint → integrate → release
```

Every transition is recorded with timestamp, actor, direction, and reason. Transitions are reversible. Undo creates a new history record — it does not delete the prior one. The audit trail is append-only.

Nothing becomes canonical by accident. Canonical status requires explicit operator action. It cannot be granted from the LLM queue, from import, or from any automated process.

---

## Architecture

![Bag of Holding — Constraint-Aware Knowledge Architecture](/assets/Images/projects/boh/boh_system_blueprint.jpg)

The system operates as a local knowledge OS with distinct layers:

**Ingestion** — controlled intake of Markdown, text, and legacy documents via file upload, folder index, or direct authoring. Frontmatter validation on entry.

**Normalization** — duplicate detection, metadata extraction, schema alignment. BOH does not index blindly.

**State engine** — SQLite manages governed state locally: registry metadata, lifecycle positions, conflict records, lineage chains, audit trail, and LLM invocation history.

**Canon & conflict layer** — deterministic scoring resolves authority by topic and plane. Conflicts surface explicitly and stay surfaced until an operator resolves them. No auto-resolution, ever.

**Graph layer** — explicit DCNS relationship edges for lineage, derivation, conflict, and supersession. The Atlas visualization renders these as an inspectable force-directed graph.

**LLM interface** — Ollama integration with inlet/outlet filters and a mandatory review queue. The model proposes. The human decides. The system records.

---

## Dashboard

![Dashboard — knowledge base health at a glance](/assets/Images/projects/boh/boh_dashboard_screenshot.jpg)

The dashboard shows corpus health: total docs, canonical count, open conflicts, lineage records, duplicate pairs, and recent document list with status, type, and lifecycle state visible at a glance.

---

## Atlas — The Relationship Field

![Atlas — force-directed relationship graph with zoom, pan, and edge hover](/assets/Images/projects/boh/boh_atlas_screenshot.jpg)

Atlas is not decorative visualization.

It is the observability layer. It answers what depends on what, what conflicts with what, what is stale, and where authority is established or missing. Nodes are colored by corpus class, sized by canon score. Red halos indicate conflicts. Amber halos indicate stale coordinates.

Interaction model: scroll to zoom, drag canvas to pan, drag node to reposition, click to open document reader, shift-click to expand neighborhood, hover edge to inspect shared topics and confidence.

---

## LLM Governance

![LLM Review Queue — proposals awaiting user review; nothing applies automatically](/assets/Images/projects/boh/boh_llm_queue_screenshot.jpg)

The LLM integration is designed around a single architectural principle:

**The model operates inside the system. It does not govern it.**

When Ollama analyzes a document, the output enters a review queue with status `pending`. The operator inspects each proposal individually — title, summary, topics, type, suggested relationships, detected conflicts — and explicitly approves or rejects it.

Approval applies only safe, non-canonical metadata fields. `status=canonical` and `operator_state=release` cannot be granted from the queue. This is enforced at the data layer, not by convention.

Every invocation is recorded in `llm_invocations` for audit.

---

## Canon & Conflicts

![Canon & Conflicts — no auto-resolution](/assets/Images/projects/boh/boh_canon_screenshot.jpg)

Canon resolution is deterministic and explainable. Every document receives a canonical authority score based on its status, type, path, version, and recency. Same inputs, same output, every time — no inference, no weighting by usage, no drift.

Conflicts surface and stay surfaced. The Acknowledge button marks a conflict as seen — it does not resolve it. Resolution requires operator action and produces a lineage record. The full scoring formula is in [`docs/math_authority.md`](https://github.com/ppeck1/Bag-of-Holding/blob/main/docs/math_authority.md).

---

## Library and Ingestion

![Library — 107 documents with status, corpus class, type, and lifecycle state filters](/assets/Images/projects/boh/boh_library_screenshot.jpg)

![Import / Ingest — filesystem indexing with canon guard active](/assets/Images/projects/boh/boh_import_screenshot.jpg)

The Library panel exposes the full browseable corpus with multi-axis filtering: status, type, lifecycle state, and corpus class. Each document opens into a detail drawer with rendered Markdown, KaTeX math, related documents, Rubrix lifecycle controls, and lifecycle event history.

Ingestion includes a canon guard: snapshot imports cannot overwrite canonical documents. Docs that would overwrite canon are skipped and reported, not silently discarded.

---

## Governance and Status

![Governance — Ollama invocation panel with task-scoped execution and workspace policies](/assets/Images/projects/boh/boh_governance_screenshot.jpg)

![System Status — server health, library path, Ollama availability, index diagnostics](/assets/Images/projects/boh/boh_status_screenshot.jpg)

The Governance panel provides workspace policy management, Ollama task invocation, audit log access, and code execution. Every invocation is labeled "Non-authoritative · requires confirmation."

The Status panel exposes runtime diagnostics: indexed doc count, graph edge count, Ollama availability, LLM queue depth, index errors, library path, and auto-index configuration. The server always boots — Ollama and auto-index failures are caught, logged, and surfaced without blocking startup.

---

## What this demonstrates

### Constraint-first systems design
This is the same design posture as CANON: start from what the system must preserve, then build toward it. BOH's governance rules are enforced architecturally, not by documentation or convention. The LLM cannot canonicalize. The undo cannot erase history. The conflict cannot auto-resolve. These are invariants, not guidelines.

### Separation of concerns across a complex domain
The system separates lifecycle governance (Rubrix), epistemic state (Daenary), relationship topology (DCNS), observability (Atlas), and LLM stewardship (review queue) into independent, non-overlapping systems. Each does one thing correctly.

### Real production scope
A working local-first knowledge workbench: FastAPI backend, SQLite with FTS5, 300+ tests across 15 test files, a vanilla JS SPA with no build step, local KaTeX and marked.js vendored for offline operation, ICS calendar export, and a standalone PyInstaller build.

### LLM governance as a design position
The choice to gate all model output behind mandatory human review is an architectural statement. It reflects a position on where AI belongs in a governed system: as a capable assistant operating under constraint, not as an authority operating above it.

---

## Why this matters professionally

This project reflects how I approach systems in healthcare, operations, and technical design: governance first, authority explicit, and failure modes made visible before they become operational incidents.

Most knowledge tooling is built for convenience. BOH is built for environments where convenience is the wrong optimization — where a decision made incorrectly, a document canonized prematurely, or an LLM output applied without review can produce real downstream harm. That is the same design posture I bring to clinical informatics, system architecture, and constraint modeling work.

The architecture here is intentional. It is not the fastest path to a working demo. It is the right path to a trustworthy system.

---

## What this is not

- A productivity tool disguised as governance
- An AI wrapper pretending to be architecture
- A RAG wrapper or vector database frontend
- A chatbot with memory
- A notes application with AI features

---

## System Implementation

| Layer | Implementation |
|-------|---------------|
| Backend | Python 3.12, FastAPI, SQLite + FTS5 |
| Frontend | Vanilla JS SPA, no build step, local vendor libs |
| LLM | Ollama (local), model-agnostic adapter |
| Operator model | Local-first, single operator |
| Deploy | `launcher.py` cross-platform, optional PyInstaller standalone |
| Tests | pytest, 300+ tests, 15 test files |

---

## Explore the System

- **Repository:** [github.com/ppeck1/Bag-of-Holding](https://github.com/ppeck1/Bag-of-Holding)
- **Whitepaper:** [Architecture rationale, design philosophy, and positioning](https://github.com/ppeck1/Bag-of-Holding/blob/main/docs/whitepaper.md)
- **README:** [Quickstart, invariants, and API reference](https://github.com/ppeck1/Bag-of-Holding/blob/main/README.md)

