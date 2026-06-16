---
title: "Bounded AI Intent and Safety Gates"
description: "A short note on why my AI prototypes route language through intent, finite actions, safety checks, and review instead of direct execution."
date: 2026-06-15
tags: ["AI", "safety", "robotics", "governance"]
draft: false
image: "/assets/project-shots/llm-robot-shell/dashboard-command-flow.png"
imageAlt: "Governed Robot Shell dashboard showing approved and blocked command flow."
---

The important question in an AI system is not "can the model do it?"

It is "what path must the output pass through before it changes the world?"

That is the design question behind [Governed Robot Shell](/projects/governed-robot-shell) and [Metis Head](/projects/metis-head).

In the robot shell, text is not action. Text becomes intent. Intent maps to one finite action. That action passes a safety check. Only then does a body backend receive anything.

The bad path is:

```text
LLM -> actuator
```

The better path is:

```text
language -> intent -> action proposal -> safety gate -> bounded execution -> log
```

Metis uses a related pattern for voice and tools. Voice trace events are redacted. Tool use stays mediated by review state. The dashboard makes the boundary visible instead of hiding it behind a friendly interface.

That matters because assistants are persuasive surfaces. A smooth interaction can make an unsafe architecture feel stable.

The work I want to show is the opposite: the architecture should keep reminding the operator what is simulated, what is proposed, what is approved, and what cannot happen from the current path.
