---
title: "E-MyR Portfolio (Astro Rebuild)"
description: "Re-architected a monolithic EMR-style resume into a structured Astro system with real routing, content separation, and deployable infrastructure."
date: 2026-02-10
tags: ["astro", "information-architecture", "ui", "content-system", "github-pages"]
status: active
github: "https://github.com/ppeck1/ppeck1.github.io"
demo: "https://ppeck.me"
image: "/assets/preview.png"
imageAlt: "E-MyR portfolio preview showing an EMR-style portfolio interface."
priority: 20
---

> **TL;DR:** Rebuilt a single-file EMR-style resume into a structured Astro application with real routing, modular components, and deployable infrastructure… while preserving the clinical interface as a functional system, not just a visual theme.

---

*Updated April 1, 2026*

## Problem

The original site was a **single HTML application** with embedded data, UI, and logic.

It worked… but it did not scale:

- All content (resume, experience, documents, blog) lived inside one file :contentReference[oaicite:1]{index=1}  
- UI rendering, data structure, and interaction logic were tightly coupled  
- No real routing → nothing was linkable or indexable  
- Any change risked breaking unrelated parts of the system  
- “Cool interface” existed, but **no underlying content architecture**

---

## Diagnosis

The issue wasn’t visual—it was structural.

The system lacked:

- **Separation of concerns** (data, UI, routing)
- **Stable content primitives** (projects, posts, documents)
- **Addressability** (URLs that can be shared, indexed, or referenced)
- **Deployment reliability** (build pipeline vs static file drop)

In practice:
> It behaved like a demo… not a system.

---

## Treatment

Full rebuild using **Astro as a structured content system**.

### Architectural shift

From:
- Single HTML file
- Embedded JSON + DOM rendering
- Runtime composition

To:
- **File-based routing**
- **Componentized UI**
- **Static build output (dist/)**
- **Content collections (blog + projects)**

---

### System design

**1. EMR interface preserved as shell**
- `/` remains the “chart”
- Tabs (Demographics, History, Meds, Labs, Notes, Documents)
- Now backed by **modular Astro components**, not injected HTML

**2. Real routing layer introduced**
- `/blog/[slug]` → individual posts
- `/projects/[slug]` → case studies
- Eliminates “dead-end UI” problem

**3. Content becomes first-class**
- Markdown-driven blog + project entries
- No longer hardcoded into UI
- Supports iteration without layout risk

**4. Asset layer normalized**
- PDFs (resume, credentials) moved to `/public/assets/`
- Direct download paths (`/assets/*.pdf`)
- Eliminates runtime link ambiguity

**5. Deployment pipeline**
- GitHub Actions build → `dist/`
- GitHub Pages hosting
- Transition from static file hosting → **build-driven deployment**

---

## What changed (materially)

### Before (HTML system)
- UI, data, and logic tightly coupled
- Resume stored as embedded JSON + HTML rendering
- Links were indirect and sometimes inconsistent
- No reliable extension model

### After (Astro system)
- UI = components
- Data = content files / assets
- Routing = file-based
- Build = deterministic output

---

## What this demonstrates

### 1. Translation layer thinking
You are not just “building a site” — you are:

- Taking a domain (clinical EMR structure)
- Mapping it into UI architecture
- Then mapping that into a maintainable system

That is **informatics thinking**, not frontend styling.

---

### 2. Structure over surface
The key shift:

> From “interface that looks like a system”  
> → “system that happens to have an interface”

---

### 3. Constraint-aware design
The rebuild directly addresses:

- content drift
- scaling friction
- deployment reliability
- linkability / credibility

---

### 4. Real-world production concerns
- Static build pipeline (Astro)
- GitHub Actions deployment
- Asset path correctness (`/public/assets`)
- Handling integration failures (e.g., sitemap build issues)

---

## Status

Active.

- Core architecture complete
- Content system operational (blog + projects)
- Deployment pipeline functional (with minor integration tuning)
- Ongoing work:
  - expanding project case studies
  - refining content density
  - stabilizing build integrations (e.g., sitemap)

---

## Bottom line

This project is no longer a “creative resume.”

It is a **structured, deployable system** that demonstrates:

- clinical → technical translation
- workflow thinking applied to software
- ability to turn an idea into a maintainable architecture

That is the actual signal.
