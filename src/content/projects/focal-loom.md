---
title: "Focal Loom - An Editable Macro Focus Stack"
description: "A Windows photography preview that selects focal frames, prepares Sony RAW files, and preserves editable Photoshop stacking results."
date: 2026-11-01
tags: ["photography", "python", "windows", "workflow", "image-processing"]
status: active
portfolioGroup: creative
sourceVisibility: private
pinned: false
featured: false
priority: 12
image: "/assets/project-shots/focal-loom/mantis-before-after.jpg"
imageAlt: "One shallow-focus mantis source frame beside the recorded 15-frame Photoshop stack."
---

At macro distances, one part of an insect can be sharp while the next falls into blur. A sequence records different focal planes. Focal Loom helps choose those photos and turn them into an editable Photoshop result while preserving the original files.

## What I built

A local Windows assistant connects photo selection, relative focus inspection, resource checks, Adobe Camera Raw preparation, and Photoshop alignment and blending. Photoshop performs the stack. Focal Loom organizes the work around it and records what went into the result.

The selection becomes an explicit input contract: ordered files, source hashes, rendering settings, output location, and detected software versions. The workflow checks the input before starting the expensive Photoshop operation.

## A recorded result

![One focal plane beside the recorded 15-frame Photoshop stack](/assets/project-shots/focal-loom/mantis-before-after.jpg)

This retained example compares one source frame with the saved Photoshop result from a 15-photo Sony ARW sequence. The eye, thorax edge, and near limb gain detail. The frontmost mouthparts remain soft because none of the selected frames recorded them fully sharp.

The working result retains aligned sources and editable blend masks. The image above is a reduced viewing copy; the original RAWs and large layered Photoshop files are not part of this portfolio.

## Keeping the result reversible

- Source hashes are checked before and after the run.
- Existing output names receive a suffix rather than being overwritten.
- The layered PSD or PSB remains available for mask editing in Photoshop.
- A receipt records the selection, preparation, software versions, and result.
- Crop review saves a separate copy while preserving the full layered stack.

## Current limits

This is a Windows preview. The recorded compatibility evidence covers Sony ARW input and Photoshop 2026 on the test system. Other formats or detected Photoshop versions are not automatically supported.

The Loom view estimates relative source-focus support. It is not measured physical depth and does not predict Photoshop's final masks. Large-PSB cropping remains experimental; the initial rectangle is a suggestion that requires inspection.

## What this demonstrates

A concrete photography workflow, input and resource validation, careful boundaries around another application's processing engine, and preservation of editable results. The source and working photography library remain private.
