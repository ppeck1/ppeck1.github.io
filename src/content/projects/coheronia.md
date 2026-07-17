---
title: "Coheronia - Godot Survival Settlement Sandbox"
description: "Godot survival settlement sandbox with a live HUD, character-owned inventory, and a browsable project wiki."
date: 2026-07-17
tags: ["godot", "gdscript", "game-dev", "survival", "sandbox", "simulation", "worldbuilding", "interactive", "documentation"]
github: "https://github.com/ppeck1/coheronia"
repo: "ppeck1/coheronia"
demo: "/demo/coheronia-wiki/docs/wiki/index.html"
image: "/assets/project-shots/coheronia/current-live-ui.png"
imageAlt: "Coheronia live gameplay UI with settlement status, event panel, player dock, health vessel, and attunement vessel."
status: active
---

> **TL;DR:** A Godot 4 side-view survival sandbox where digging, building, and feeding a settlement feed three real systemic pressures — **Coherence / Load / Resilience** — on the road to ruling a small civilization.

## What it is

Coheronia is a side-view survival settlement sandbox built in **Godot 4 (GDScript)**, inspired by Terraria-style mining and building, survival crafting, and civilization sims. You reshape terrain directly while managing a settlement whose health is computed from real world state — shelter, light, food, threats — not decorative meters. As of **v0.6**, the game launches into a persistent shell for characters, worlds, saves, and simulation settings, with each world stored as a configured simulation container in its own JSON save file.

## Why it exists

The long-term fantasy is bigger than solo survival: carve out a place in a hostile world, rule a small civilization, and watch its needs, fears, politics, and defenses push back through play. The current shell already stores future-facing knobs (morale, loyalty decay, rebellion, ruler pressure) as world rules so later systems can consume them without rewriting the save model.

## Core features

- **Persistent shell**: character creation (five playable ancestries with live effects), world creation with presets, six difficulty axes, and rule toggles
- **Character-owned inventory, hotbar, and tools** that travel between worlds (v0.6)
- **Data-driven enemies** (surface slime, cave crawler, raider) with drops and difficulty-scaled density
- **Player XP across six types** plus base progression: Camp → Hamlet → Village gating population growth
- **Config-driven deterministic world generation** with per-block seed channels
- **Automated smoke test** exercising the real gameplay path with 122 checks

## Architecture

A shell scene manages profiles, characters, and worlds; the playable scene owns day/night, storms, threats, and population flow. JSON data authorities (`blocks`, `recipes`, `enemies`, `ancestries`, `settlement_rules`, progression tables) drive behavior, loaded through registry autoloads. Known limits are documented honestly: placeholder art, abstract population, finite single-biome terrain, and read-only inventory UI.

## Interactive project wiki

The live wiki below is packaged with the portfolio so it can be browsed without
leaving this project page. It covers the actual game data, inventory and crafting
routes, HUD architecture, image coverage, planned work, and known limitations.

<div class="demo-embed">
  <div class="demo-bar">
    <span>Coheronia Wiki - live systems and implementation reference</span>
    <a href="/demo/coheronia-wiki/docs/wiki/index.html" target="_blank" rel="noopener">Open full screen -&gt;</a>
  </div>
  <iframe
    src="/demo/coheronia-wiki/docs/wiki/index.html"
    width="100%"
    height="760"
    title="Coheronia interactive project wiki"
    loading="lazy"
  ></iframe>
</div>
