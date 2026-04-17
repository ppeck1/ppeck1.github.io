---
title: "Why Hospitals Pay Overtime Instead of Hiring Staff"
description: "A systems-level look at why overtime persists—and what it reveals about capacity, measurement, and hidden structural failure."
date: 2026-04-17
tags: ["healthcare", "systems", "informatics", "constraints", "CANON", "operations"]
draft: false
---

Hospitals don’t rely on overtime because they’re inefficient.  
They rely on it because the system makes it the easiest option.

The pattern is familiar to anyone who has worked inside a health system through a few budget cycles.

Funding increases. Leadership announces investments in staffing and capacity. Six months later, the nurses are still exhausted, the gaps are still covered by overtime, and the dashboards still show acceptable numbers.

Nobody is lying. That’s the strange part.

## The Standard Explanation Isn’t Wrong — It’s Incomplete

The usual account goes: hiring is slow, benefits add cost, contracts are complex, and overtime is a flexible lever.

All true.

But this explanation treats the symptom as the whole system. It doesn’t explain why the pattern persists even when administrators know better, even when staff push back, even when the cost math eventually becomes undeniable.

Something deeper is operating.

A useful way to see it is to treat the organization as a constrained system — one with capacity limits, flow, and mismatch under load.

## What the System Is Actually Doing

If you strip it down, the pattern becomes predictable.

At a minimum, you can read the system through three variables:

- **Ω_V (capacity)** — structural headroom, sustainable load  
- **T (throughput)** — work moving through the system  
- **Γ (mismatch)** — misalignment between load and capacity  

When funding increases, something specific happens:

Throughput goes up.

More patients. More cases. More expectations. More flow.

But capacity doesn’t move at the same speed. Hiring lags. Onboarding takes time. The structure remains largely fixed in the short term.

That creates mismatch.

And mismatch produces dissipation:

Φ = T · Γ

When more work is pushed through the same structure, the system has to absorb that strain somewhere.

As that strain becomes visible, regulatory pressure rises:
- more documentation  
- more compliance  
- more oversight  

Not as punishment, but as stabilization.

From the staff perspective:
more work, more paperwork, no more people.

Overtime becomes the release valve.

## What Overtime Is Doing Underneath

Short term, it works.

Coverage gaps close. Targets are met. The dashboards hold.

But underneath, three structural changes are accumulating:

### 01 — Capacity Degrades (Ω_V ↓)

Sustained overload erodes the system itself.

Burnout, attrition, and reduced cognitive reserve narrow the range the system can safely operate within. The structure becomes smaller, even if headcount hasn’t changed yet.

### 02 — Flexibility Shrinks

The system loses optionality.

Fewer experienced staff. Fewer viable configurations. Fewer ways to respond when conditions shift.

What was once adaptable becomes brittle.

### 03 — History Hardens

Patterns like defaulting to overtime become embedded—and harder to reverse.

The path narrows.

Over time, the system doesn’t just get smaller—it loses options and becomes harder to change.

This is not about intent. It’s about dynamics.

Overtime improves the visible metric while degrading the underlying state.

A locally rational decision producing a globally unstable trajectory.

## Why Nobody Sees It Coming

Even well-instrumented systems miss this.

You can track:
- staffing ratios  
- length of stay  
- satisfaction scores  
- throughput dashboards  

…and still not see the system.

Because you are not measuring the system.
You are measuring a projection of the underlying system state:  
Y = P_K(X̃)

That projection compresses reality. It introduces loss.

Structure that exists in the real system does not survive into the measurement layer.

What falls out is exactly what matters most:

- Capacity degradation doesn’t appear until failure  
- Burnout doesn’t register until attrition  
- Rigidity doesn’t show up until flexibility is required  

By the time the metrics move, the system has already changed.

The dashboard looked fine. That’s not a defense. It’s the mechanism.

## What the Signal Is Actually Saying

Overtime isn’t a staffing strategy.  
It’s a signal that the system is operating beyond its true capacity—  
using measurements that cannot see the cost.

The dashboard is a projection.  
The organization is the system.  

If decisions are built on the projection, optimization will happen there—  
and the underlying system will drift in ways the metrics cannot predict.
---

CANON is a constraint-based system model for analyzing capacity, flow, and failure dynamics in complex systems.
Technical reference: https://github.com/ppeck1/canon-system

*Paul Tobin Peck*