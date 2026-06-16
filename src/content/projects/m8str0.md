---
title: "M8str0 - Browser-Native Audiovisual Workstation"
description: "A modular node-graph instrument where the same CV signal drives Web Audio synthesis and WebGL2 visuals simultaneously. Runs offline in the browser."
date: 2026-06-16
tags: ["audiovisual", "synthesizer", "web-audio", "webgl", "local-first", "react", "typescript", "generative"]
github: "https://github.com/ppeck1/m8str0"
status: active
image: /assets/project-shots/m8str0/screenshot.png
imageAlt: "M8str0 node graph canvas with synthesizer controls and WebGL visual panels"
featured: false
priority: 14
---

## What it is

A browser-native modular synthesizer and visual instrument. Build a patch by dragging nodes onto a canvas and wiring their ports — exactly like hardware modular synthesis, but with no plugins, no install, no server.

The unifying idea: a single CV bus connects everything. The same scalar signal that modulates an oscillator's pitch simultaneously drives a GLSL shader uniform at 60fps. Audio and visuals are one system, not two.

## Node types

**Input:** Clock, LFO, Constant, MicIn, WebcamIn  
**Audio:** Oscillator, Gain, Filter, Reverb, Delay (Web Audio API)  
**Control:** Step Sequencer, Math, Slew smoother, Quantize (snaps to musical scale)  
**Visual:** Expression (curl-noise particle field), Waveform (oscilloscope), Kaleidoscope (mirrored curl-noise), Composite (64-particle ring with ping-pong FBO trails)  
**Vision:** FaceAnalyser — runs MediaPipe face landmark detection in-browser via WASM and outputs 5 biometric CV signals: smile intensity, brow raise, gaze X/Y, face proximity

## Architecture notes

Patches save as `.m8patch` JSON and auto-persist to IndexedDB. `GraphRuntime.ts` topologically sorts the node graph each tick and rejects cycles before evaluation. A governor feedback limiter with polarity-flip recovery prevents audio runaway. Perform mode hides the editor and expands visual panels full-screen.

## What This Demonstrates

- Unified CV routing across Web Audio API params and GLSL shader uniforms
- Topological graph evaluation with cycle rejection at runtime
- MediaPipe face tracking as a live modulation source, loaded on-demand
- Local-first patch persistence without any server or account
