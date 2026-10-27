---
title: "Mathematical Expression Atlas — A Visual Field Notebook"
description: "An offline math playground where stories, formulas, shapes, and graphs describe the same changing relationship."
date: 2026-10-26
status: active
draft: false
github: https://github.com/ppeck1/mathcards
repo: ppeck1/mathcards
demo: https://ppeck.me/mathcards/
demoLabel: Open the atlas
pinned: true
featured: false
priority: 100
image: /images/projects/mathcards-sample.jpg
imageAlt: "A twelve-crate story connects highlighted weights to separate sample and population mean calculations."
tags:
  - math
  - learning
  - visualization
  - local-first
  - javascript
---

I made the Mathematical Expression Atlas because I really enjoy math. Thinking of it as a way to describe relationships precisely has changed how I see it. I wanted a place to follow those relationships, change something, and see what the expression was saying.

The result is a browser-based field notebook: short stories beside working calculations and interactive visuals. A variable has a place in the explanation, a role in the formula, and a visible effect in the scene.

## Try it here

The embedded atlas runs from the same repository-backed demo as the full-screen version.

<div class="demo-embed demo-embed-wide">
  <div class="demo-bar">
    <span>Mathematical Expression Atlas — interactive learning prototype</span>
    <a href="/mathcards/" target="_blank" rel="noopener">Open full screen -&gt;</a>
  </div>
  <iframe
    src="https://ppeck.me/mathcards/"
    width="100%"
    height="820"
    title="Mathematical Expression Atlas interactive demo"
    loading="lazy"
  ></iframe>
</div>

## The problem

A changing number gives me part of the explanation. I also want to see what grew, which direction turned, what stayed fixed, and where an approximation began to miss.

The challenge was to keep those views connected. A story can make an idea approachable, but its numbers need to agree with the formula. A diagram can make a relationship visible, but its shape needs to represent the quantity being discussed. A definition needs to be available when an unfamiliar symbol interrupts the thought.

## What I built

Each concept has a small playground with declared inputs, a mathematical model, and distinct visual representations. The shared interface provides controls, smooth motion, readable number updates, comparison pins, and saved experiments.

The stories follow the selected variable through three stages:

1. Locate it in a concrete situation.
2. Follow its contribution through the calculation.
3. Find the resulting change in the visual.

Geometry and Graph views offer different ways to inspect the relationship. Selected lessons also have 3D views where a surface or spatial relationship helps explain the mathematics.

## One crate, two averages

One lesson keeps twelve crate weights visible while highlighting a chosen group of four. Initially, the selected crates average 12.75 kg, while the full population averages 10.75 kg.

Move the highlighted crate from 14 kg to 26 kg. The selected mean rises to 15.75 kg; the population mean rises to 11.75 kg. The same twelve-kilogram change is divided by four in one calculation and twelve in the other. Both mean lines move on the chart, at different rates.

The example also keeps its selection method visible. This is a deliberately chosen group in a known population. The difference between its mean and the population mean does not supply a confidence interval.

## A map and a reference

The atlas organizes the current collection into eight territories and twenty-four areas. A searchable index explains terms and notation and links them to cards that actually use them. A learner can move from a symbol to a definition, into a working example, and outward to related concepts.

The latest expansion filled three areas that previously had no playable lesson: Sets and proof, Statistics, and Linear-time algorithms. Each area now has an introduction; deeper coverage remains on the plan.

## Structure that leaves room to grow

Concept records, models, stories, visuals, definitions, and map placement are separate parts. New lessons use the shared host's controls and animation clock. The application runs locally in a browser without an account, API key, or installation.

That modularity matters because the front-end design is still developing. I want to improve how an idea feels without rebuilding the mathematics underneath it.

## Keeping the demo current

The live demo is built directly from the public repository. Changes to the main branch run the checks and rebuild the atlas before GitHub Pages publishes it. This page links to that deployment rather than maintaining another copy of the card data.

## Current state

Version 0.22.0 contains 38 draft cards, 194 worked examples, 409 searchable reference entries, and 83 declared views. It is a working learning prototype with an unfinished visual design. Lessons state the assumptions and limits of their executable models; independent mathematical and pedagogical review remains future work.

The purpose is personal and practical: make mathematics easier to explore as a language for describing what changes, what relates, and what can be inferred under stated conditions.

## Explore

- [Open the Mathematical Expression Atlas](https://ppeck.me/mathcards/)
- [Source code on GitHub](https://github.com/ppeck1/mathcards)
- [Read why I started building it](/blog/math-as-description/)
