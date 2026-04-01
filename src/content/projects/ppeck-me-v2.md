---
title: "E-MyR Portfolio (Astro rebuild)"
description: "Rebuilt my EMR-style portfolio as a structured Astro site with real blog + project routes… while preserving the clinical chart metaphor."
date: 2026-02-10
tags: ["astro", "information-architecture", "ui", "content-system", "github-pages"]
status: active
repo: "https://github.com/ppeck1/ppeck1.github.io/tree/astro"   
demo: "https://ppeck.me"                        
---

> **TL;DR:** I converted a fragile single-page portfolio into a maintainable Astro system with sharable URLs for posts/projects… without losing the EMR interface that makes it memorable.

## Problem
My original site was a single HTML app. It looked distinctive, but it was hard to extend without breaking things:
- Content changes required editing a large monolithic file
- No clean URLs for posts or shareable artifacts
- Adding a blog and projects risked turning into a brittle “everything script”

## Diagnosis
I needed a portfolio that behaves like a real system:
- **Stable structure** for iteration (add content without UI drift)
- **Sharable routes** for credibility (SEO, recruiting links, direct references)
- A **content pipeline** (projects + posts as first-class assets)
- Preserve the **clinical chart metaphor** as a differentiator, not a gimmick

## Treatment
Astro rebuild with a hybrid architecture:
- **EMR shell** stays on `/` with tab navigation (Demographics / History / Diagnosis / Meds / Labs / Notes / Documents)
- **Blog posts** render as real pages under `/blog/<slug>`
- **Project case studies** render under `/projects/<slug>`
- “Notes” tab becomes the blog index inside the chart metaphor
- Theme system (light/dark) + background grid to keep the EMR vibe consistent

## What this demonstrates (why it matters)
- Information architecture + UI metaphor that communicates domain identity (clinical systems)
- Turning “cool design” into a maintainable content system
- Production-minded web work: routes, deployability, structure, iteration safety

## Status
Active… adding projects + posts as proof artifacts.
