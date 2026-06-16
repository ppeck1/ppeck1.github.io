---
title: "Reader App - Local-Only Android Text Editor"
description: "A small Android text editor for Markdown, JSON, code, and plain text files with no ads, accounts, analytics, cloud sync, or network permission."
date: 2026-06-10
tags: ["android", "flutter", "local-first", "privacy", "text-editor", "mobile"]
github: "https://github.com/ppeck1/reader-app"
status: active
image: "/assets/project-shots/reader-app/editor.jpg"
imageAlt: "Reader Android editor screen showing a local text document open for editing."
priority: 7
---

> **TL;DR:** Reader is intentionally small: open a text file on Android, edit it locally, and save it without accounts, cloud services, ads, analytics, or broad storage access.

## Problem

Editing a Markdown, JSON, code, or plain text file on a phone should not require a heavy editor or a cloud account.

Reader uses Android's system document picker and Storage Access Framework. The user chooses a file, and the app works with that selected document instead of asking for unrestricted storage access.

## Screens

<p style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
  <img src="/assets/project-shots/reader-app/home.jpg" alt="Reader Android home screen" style="width: 220px;" />
  <img src="/assets/project-shots/reader-app/editor.jpg" alt="Reader Android editor screen" style="width: 220px;" />
  <img src="/assets/project-shots/reader-app/settings.jpg" alt="Reader Android settings screen" style="width: 220px;" />
</p>

## Current Scope

Reader is a compact text editor, not a mobile IDE. The repo documents support for opening, creating, saving, searching, detecting unsaved changes, local recovery drafts, and recent files.

It deliberately does not include cloud sync, code execution, rich-text formatting, folder workspaces, or Git integration.

## What This Demonstrates

- Product restraint
- Local-only privacy model
- Flutter mobile implementation
- Respect for ordinary file ownership on Android
