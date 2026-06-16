---
title: "Dev Launchpad - Windows Workspace Control Panel"
description: "A portable Windows control panel for reopening local development workspaces, checking ports, viewing Git state, and launching configured project URLs."
date: 2026-06-09
tags: ["windows", "python", "developer-tools", "launcher", "local-first", "workflow"]
github: "https://github.com/ppeck1/dev-launchpad"
status: active
image: "/assets/project-shots/dev-launchpad/main.png"
imageAlt: "Dev Launchpad Windows control panel for starting local workspaces, checking ports, and opening project URLs."
priority: 8
---

> **TL;DR:** Dev Launchpad is a small Windows app for reopening development workspaces without reconstructing the same terminals, folders, ports, and browser URLs by hand.

## Problem

Local development work has a lot of repeated setup friction:

- open this folder
- start this command
- check this port
- open this health URL
- remember which process owns the port
- check whether the repo is dirty

Dev Launchpad turns that into a YAML-backed control panel.

## Current Capabilities

The public README describes a portable Windows executable plus source-run path. It stores launch definitions in local YAML, starts selected apps, checks ports and HTTP health endpoints, shows basic Git state, and preserves malformed YAML rather than overwriting it.

## What This Demonstrates

- Practical Windows tooling
- Local configuration as an operator surface
- Developer ergonomics grounded in real repeated work
- Small app scope with clear safety notes
