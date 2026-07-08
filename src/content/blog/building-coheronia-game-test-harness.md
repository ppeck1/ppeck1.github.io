---
title: "Building Coheronia: A Game That Became Its Own Test Harness"
description: "How Coheronia became a small Godot survival sandbox with a verification spine: task queues, ledgers, review passes, and in-engine smoke tests."
date: 2026-07-08
tags: ["Coheronia", "Godot", "game-dev", "AI-assisted development", "verification", "systems"]
draft: false
image: "/assets/blog/coheronia-settlement-day.png"
imageAlt: "Coheronia daytime settlement with a Town Hall, torch line, HUD bars, and toolbelt."
---

Coheronia started as a side-view survival settlement sandbox.

It became a test of process.

The simple description is this: [Coheronia](https://github.com/ppeck1/coheronia) is a Godot game where you dig, build, place torches, gather food, defend a Town Hall, and try to keep a small frontier settlement alive.

The more useful description is this: Coheronia is a playable artifact with a verification spine.

Inside the game, shelter, food, light, stockpiles, enemies, and storms feed into three visible pressures: Coherence, Load, and Resilience. Outside the game, every increment is forced through a bounded queue item, review pass, validator, smoke run, and evidence ledger.

So the game loop is survival.

The build loop is proof.

## The Problem With Fast AI-Assisted Work

AI-assisted development changes the failure mode of a project.

The old problem was often speed. Can I get enough working code written to make the idea visible?

The new problem is drift. Can I keep enough structure around the work that a fast-moving build does not turn into plausible-looking nonsense?

That is the dangerous part of AI-assisted development. It is not that an agent cannot produce code. It is that an agent can produce plausible code faster than the operator can verify meaning.

Coheronia became a useful place to practice the opposite pattern: bounded work, explicit queue items, independent review, validation, smoke testing, and evidence before acceptance.

The aim was not to make AI autonomous. The aim was to make AI-assisted work inspectable.

## The Build Loop

The working pattern became deliberately plain:

```text
human direction
-> bounded queue item
-> implementation pass
-> independent review pass
-> corrections
-> repository validator
-> Project Ops Capsule doctor
-> in-engine Godot smoke run
-> run ledger
-> commit
```

That loop is slower than simply asking for the next feature. It is also the reason the project still has a shape.

Each increment is expected to leave evidence. The task queue names the next bounded piece. The run ledger records what changed, what was reviewed, what was fixed, and which checks passed. The validator catches data and schema drift. The smoke suite runs the game itself.

That last part matters.

A normal project can accumulate documentation that says the system works. Coheronia has a better constraint: the game has to open, execute real systems, and write a passing smoke result.

## The Game Became Its Own Test Harness

The in-engine smoke suite is the part I am most glad exists.

It does not only check isolated utility functions. It runs through real game surfaces: mining, tool behavior, inventory, save and load, character migration, equipment, health, combat feedback, Town Hall state, UI panels, world settings, and settlement pressure.

As of the current public build, that suite is at 183 checks. That number is not the point by itself. The point is that every major new surface has to become testable.

When background trees were added, the suite had to prove the player could walk past them. When gear slots were added, the suite had to prove they persisted. When damage visuals were added, the suite had to prove they did not alter drops or save behavior. When the inventory, toolbelt, and Town Hall panels became icon grids, the suite had to prove the visible counts still matched the underlying inventory and stockpile.

That changes the character of the build.

The game is no longer only a prototype. It is a playable artifact with a verification spine.

## Why Coherence, Load, and Resilience Belong in a Game

The Coherence / Load / Resilience model could have stayed as abstract systems language. Putting it into a game makes it less decorative.

In Coheronia, coherence is not a motivational word. It is computed from world state. Did the player roof the hall? Is there enough light? Is there food? Are enemies pressuring the base? Is the settlement growing beyond what it can support?

Load is the accumulated strain. Resilience is the system's ability to absorb that strain without immediately collapsing.

That makes the fantasy setting useful. A small settlement is legible. If the torches go out, the night gets worse. If the stockpile grows, raiders have a reason to care. If the roof is incomplete, storms matter. If food runs low, population growth is not free.

The design gives the systems language a body.

## Current Build State

The current public repo is still early, but it is no longer just a shell.

It has a persistent character and world shell, deterministic world generation, mining and block placement, light sources, food, health, enemies, storm pressure, Town Hall stockpiles, ancestry effects, equipment slots, simple combat gear, Attunement, a first skill-tree lane, and visual panels for inventory, toolbelt, and village state.

The current task queue shows FQ-00 through FQ-09 complete. FQ-10 is next, focused on more ores and metallurgy data.

That next step is the right kind of expansion. Mining progression should grow through data first: ore families, depth bands, drops, display names, and compatibility with the current starter ore gate. Only after that does it make sense to deepen the station chain with workbench, furnace, anvil, smelting, and metal gear.

This is one of the useful disciplines of the project. The queue keeps the work from trying to become every game system at once.

## What This Shows, and What It Does Not

Coheronia does not need to be read as a claim that I am a senior game engineer.

It shows something more specific.

It shows that I can define a system, decompose it into bounded increments, use AI agents without surrendering direction, require evidence, inspect failures, preserve documentation, and keep a creative technical project from dissolving into vibes.

That matters to me because most of my work sits in the same pattern, even when the domain changes. Clinical workflow, local-first project systems, knowledge governance, AI harnesses, portfolio infrastructure, and small games all have a shared problem: visible surfaces are easy to overproduce, but trustworthy state is harder.

Coheronia is a compact version of that problem.

Inside the game, the settlement pushes back.

Outside the game, the verification loop pushes back.

That symmetry is the real reason the project is worth showing.

## The Current Shape

The art is still placeholder. The settlers are still abstract. The terrain is finite. Enemy behavior is simple. The panels are readable but not polished. There is no audio yet. There are many missing systems that a commercial game would need.

That is fine.

The public artifact does not need to pretend to be finished. It needs to be inspectable.

Right now, Coheronia has a playable world, a settlement pressure model, a public repo, a task queue, run ledgers, validation scripts, and a smoke suite that has to pass before a slice counts as done.

That is the part I want to carry forward.

A small game is useful. A small game with an evidence trail is more useful.
