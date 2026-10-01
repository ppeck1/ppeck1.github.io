---
title: "SmartPhrase Builder — Visual Epic Drafting Tool"
description: "An offline visual builder that helps clinicians assemble, check, and copy Epic SmartPhrase drafts one block at a time."
date: 2026-10-01
tags: ["clinical-informatics", "documentation-workflow", "healthcare", "local-first", "javascript", "accessibility"]
github: "https://github.com/ppeck1/epic-smartphrase-visual-builder"
repo: "ppeck1/epic-smartphrase-visual-builder"
demo: "/demo/smartphrase-builder/"
demoLabel: "Open the live builder"
demoLinkLabel: "Live builder"
image: "/assets/project-shots/smartphrase-builder/desktop-builder.png"
imageAlt: "SmartPhrase Builder showing a phrase editor, plain-text preview, and copy controls."
pinned: true
featured: true
priority: 2
status: active
draft: false
---

> **TL;DR:** SmartPhrase Builder turns a hard-to-read setup task into three steps: name the phrase, build it one block at a time, and copy plain text into Epic for testing.

## Try it here

The builder below is the real tool. It runs in your browser and keeps the draft on this device.

Do not enter patient information. This prototype is not connected to Epic and cannot publish or approve clinical content.

<div class="demo-embed demo-embed-wide">
  <div class="demo-bar">
    <span>SmartPhrase Builder — live offline prototype</span>
    <a href="/demo/smartphrase-builder/" target="_blank" rel="noopener">Open full screen -&gt;</a>
  </div>
  <iframe
    src="/demo/smartphrase-builder/?embed=1"
    width="100%"
    height="820"
    title="SmartPhrase Builder interactive demo"
    loading="lazy"
    allow="clipboard-write"
  ></iframe>
</div>

## The problem

SmartPhrases can save time, but building them can be harder than it should be.

Writers have to think about normal sentences, blank spaces, SmartLinks, SmartLists, naming rules, and what still needs to be checked in Epic. When all of that appears at once, a useful tool can start to feel like another form to complete.

The original specialty workbook held valuable knowledge, but it also carried too much of that complexity into the screen.

## What I changed

I distilled the workbook into a public, generic tool with one clear path:

1. Name the phrase.
2. Build the body from text, wildcards, SmartLinks, and SmartList plans.
3. Review exactly what will copy.
4. Copy plain text and test it in an approved Epic training or test area.

The interface keeps advanced work—saved files and reference libraries—inside a secondary menu. The normal path stays focused on the document.

## What the tool does

- Builds a phrase one block at a time
- Lets a writer type `@` inside a sentence to find a SmartLink
- Shows the exact plain text that will copy
- Keeps drafts in the browser
- Calls out unfinished blanks and items that still need work in Epic
- Saves and opens portable draft files
- Works as one offline HTML file

## Why the design is safer

The tool does not pretend it can verify an Epic setup.

Blue marks the main action. Amber means “check this in Epic.” Red means something is unfinished. Green confirms an action that finished.

The language stays direct: the builder is not connected to Epic, it has not been clinically validated, and patient information does not belong in it.

![SmartPhrase Builder at phone width](/assets/project-shots/smartphrase-builder/mobile-builder.png)

## What this demonstrates

- Turning firsthand documentation work into a clearer product model
- Reducing a dense workflow without removing its safety checks
- Writing for clinicians, product reviewers, and technical readers at the same time
- Designing one interaction for pointer, keyboard, and touch
- Keeping a portable one-file release while maintaining modular source code
- Testing the interactions most likely to break as the interface changes

## Technical notes

The public release is a single generated `index.html` file. The editable source is split into small HTML, CSS, and JavaScript modules.

The browser and the automated checks share the same output and import rules. The test suite covers draft validation, safe imports, generated output, the inline picker, undo, and clipboard copy. GitHub Actions runs the full check on the documented Node 18 minimum.

There is no server, account, analytics script, or runtime network request. The source, examples, screenshots, variable matrix, and architecture notes are all available in the public repository.

## Boundaries

- Epic configuration differs by organization.
- This tool cannot prove that a SmartLink or SmartList exists locally.
- It does not create, publish, approve, or clinically validate a SmartPhrase.
- Every phrase still needs review and testing in an approved Epic environment.

Epic, SmartPhrase, SmartLink, SmartList, and SmartObject are names used only to describe compatibility with Epic software. This independent project is not made, approved, or supported by Epic Systems Corporation.
