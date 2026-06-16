---
title: "Why I Keep Building Local-First Tools"
description: "Why several recent projects start with local ownership, visible state, and human review before adding AI or automation."
date: 2026-06-16
tags: ["systems", "local-first", "governance", "AI"]
draft: false
image: "/assets/Images/projects/boh/boh_dashboard_screenshot.jpg"
imageAlt: "Bag of Holding dashboard showing governed local knowledge state."
---

The through-line across Bag of Holding, Project Atlas, Reader, Dev Launchpad, and the robot and Metis prototypes is not simply "local apps."

It is ownership.

Local-first matters because the operator can inspect the state, keep the artifact, and decide what crosses a boundary. That becomes more important as AI enters the workflow.

My current rule is simple:

> Automate only after authority is visible.

That means:

- canonical documents are explicit, not assumed
- LLM output enters review queues, not final state
- local files remain owned by the user
- tool calls are logged and bounded
- project state is inspectable before it is exported or sent elsewhere

This is why [Bag of Holding](/projects/bag_of_holding) treats knowledge as a governed lifecycle, why [Project Atlas](/projects/project-atlas) keeps the daily work ledger local, and why [Reader](/projects/reader-app) deliberately avoids network permission.

The pattern is clinical, too. In healthcare workflows, the dangerous failure is often not that no one acted. It is that no one can later tell which statement was authoritative, which handoff was current, or which decision changed the state.

So the software posture is the same as the workflow posture: preserve authority, preserve provenance, and make state visible before optimizing speed.
