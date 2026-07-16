---
title: "Technology Doesn't Replace the Work. It Moves the Bottleneck."
description: "What nursing taught me about AI, workflow design, and carrying judgment across systems."
date: 2026-07-16
tags: ["clinical-informatics", "AI", "workflow-design", "systems", "human-in-the-loop"]
draft: false
image: "/assets/project-shots/project-atlas/today.png"
imageAlt: "Project Atlas Today screen showing active, blocked, overdue, and handoff-ready work."
---

*What nursing taught me about AI, workflow design, and carrying judgment across systems.*

One of the most dangerous records in healthcare is the one that looks complete.

The vital signs are entered. The medication list is reconciled. The required fields are filled, and the note is signed. Yet the chart may still fail to show the shape of the situation: what changed, why it matters, what has already been tried, which uncertainty remains consequential, what would trigger escalation, and who is responsible for the next decision.

The record is complete as an artifact and incomplete as a model of reality.

That distinction reaches far beyond clinical documentation. It describes one of the central problems of modern systems, especially those being accelerated by artificial intelligence.

Technology does not replace the work. It moves the bottleneck.

AI can compress the distance between an intention and an artifact. It can produce text, code, plans, images, summaries, and documentation at extraordinary speed.

It does not automatically compress the distance between an artifact and trust.

When production becomes inexpensive, verification becomes scarce. When access becomes easy, interpretation becomes scarce. When storage becomes abundant, authority and boundaries become scarce. When tasks can be completed automatically, the difficult work moves toward deciding what the output means, whether it belongs, and what should happen next.

The work has not disappeared.

It has moved closer to judgment.

## Nursing Taught Me To Look Past Completion

In clinical work, a completed task is not the same as an understood situation.

A blood pressure can be documented correctly and still be interpreted poorly. The number matters, but so do its trajectory, the patient's symptoms, the treatment already attempted, the reliability of the measurement, and the conditions required to maintain it.

The value may satisfy the field without explaining the patient.

Documentation follows the same principle. A useful note does more than prove that an interaction occurred. It preserves enough of the reasoning that care can continue without forcing someone else to reconstruct the case from scattered clues.

Clinical practice follows a loop:

Observe. Interpret. Intervene. Reassess. Document.

Documentation is not clerical residue at the end of that loop. It is part of the mechanism that allows the loop to survive a handoff.

That lesson changed how I evaluate systems. I do not ask only whether an output exists or a workflow completed. I ask whether the result still represents the reality it was intended to capture.

## A System Can Keep Operating After Its Purpose Is Lost

We usually imagine system failure as something visible. An application crashes. A query returns an error. A workflow stops. A dashboard turns red.

A more difficult failure occurs when the system continues operating after it has stopped protecting the thing it was designed to protect.

A procedure remains mandatory after nobody can explain its purpose. A metric becomes a substitute for the outcome it once represented. Documentation expands while the useful signal becomes harder to find. An automated process reproduces a rule faster than anyone revisits whether that rule still makes sense.

The dashboard stays green because the system is measuring its own activity rather than the reality outside it.

Automation can accelerate this kind of drift. It scales the representation of the work, but not necessarily the judgment that gave the work meaning.

I kept encountering that same failure mode in different systems.

## Completion Is Not Readiness

I have been developing [Project Atlas](/projects/project-atlas) as a state-reconciliation system for complex work. It brings together tasks, planning documents, repositories, decisions, and deliverables to create a more reliable picture of whether a project is actually ready to move forward.

At first, the problem looked like project management. I had work queues, documents, code, open questions, and deliverables. A sufficiently organized task tracker seemed like the answer.

It was not.

A project can contain many completed tasks and still be unready. One source can show recent activity while another exposes missing planning context. Both can be accurate because they measure different dimensions of the work. A proposed next step can be sensible without being reviewed, accepted, or supported by enough evidence.

Atlas therefore evolved beyond task tracking. The system needed to represent where information came from, how current it was, what supported it, and whether its proposed state had been accepted by a person.

<figure class="media-frame">
  <img src="/assets/project-shots/project-atlas/projects.png" alt="Project Atlas Projects screen showing active project state, blocked work, and status fields." loading="lazy" decoding="async" />
  <figcaption>Project Atlas treats project state as something to reconcile, not just a list of tasks to close.</figcaption>
</figure>

That distinction becomes essential in AI-assisted work. An AI can identify an inconsistency, draft a correction, or recommend a next action. It should not quietly convert that proposal into organizational truth.

Atlas taught me a principle I now apply broadly:

Completion is a property of a task. Readiness is a property of a system.

Readiness depends on the coherence of the surrounding state, not merely the number of boxes checked.

## Retrieval Is Not Evidence

[Bag of Holding](/projects/bag_of_holding) is a knowledge system I built and govern to separate working context from accepted evidence.

Most knowledge tools optimize for retrieval. They promise to help people find more information, faster. That is useful, but retrieval is only one part of trustworthy knowledge work.

A system must also distinguish between private notes and public artifacts, drafts and approved records, historical context and current guidance, or related material and evidence strong enough to support a decision.

In one governed retrieval test, Bag of Holding found material related to the question but no source that qualified as authoritative support. Rather than combine weak fragments into a plausible answer, it returned no supported result.

That was not a failed search. It was a successful boundary.

<figure class="media-frame">
  <img src="/assets/Images/projects/boh/boh_canon_screenshot.jpg" alt="Bag of Holding Canon and Conflicts screen showing governed authority and unresolved conflict state." loading="lazy" decoding="async" />
  <figcaption>Bag of Holding makes authority explicit, so relevance cannot silently masquerade as accepted evidence.</figcaption>
</figure>

A credible system must be able to say:

I found relevant material, but I do not have enough accepted evidence to support this conclusion.

Healthcare contains versions of this distinction everywhere: a draft policy is not an active policy, a copied-forward statement is not a newly verified finding, and a possible plan is not an order.

Search systems can collapse those differences because their primary goal is relevance. Decision-support systems cannot afford to.

Relevance is not authority.

Trustworthy AI will not come from making models sound increasingly certain. It will come from designing systems that distinguish between what can be retrieved and what can responsibly be relied upon.

## Generation Is Not Acceptance

[Coheronia](/projects/coheronia) is a survival-settlement game I use as a test bed for AI-assisted development under real production constraints.

AI tools made it possible to produce code, interface assets, documentation, visual elements, and implementation options rapidly. That acceleration was real, but it also changed the scarce resource. More material reached the review stage than could be responsibly accepted without a disciplined process.

Many outputs were plausible in isolation but wrong at the system boundary.

A texture could appear correct as an asset and fail at live interface scale. A visual component could satisfy the wording of a request while violating the geometry, hierarchy, or interaction contract of the larger system. The output existed, but it did not belong.

<figure class="media-frame">
  <img src="/assets/project-shots/coheronia/settlement-day.png" alt="Coheronia settlement scene showing the side-view terrain, interface, and survival state during daytime play." loading="lazy" decoding="async" />
  <figcaption>In Coheronia, generated work has to survive contact with live scale, interface hierarchy, and play-state readability.</figcaption>
</figure>

<figure class="media-frame">
  <img src="/assets/project-shots/coheronia/shell-title.png" alt="Coheronia shell title screen showing the persistent game shell entry point." loading="lazy" decoding="async" />
  <figcaption>The persistent shell gives the project a product boundary for saves, characters, worlds, and future systems.</figcaption>
</figure>

<figure class="media-frame">
  <img src="/assets/project-shots/coheronia/world-create.png" alt="Coheronia world creation screen with settlement, difficulty, and simulation configuration controls." loading="lazy" decoding="async" />
  <figcaption>Coheronia's shell keeps future simulation pressure visible early, so generated pieces have to fit the larger product contract.</figcaption>
</figure>

<figure class="media-frame">
  <div class="video-embed">
    <iframe src="https://www.youtube-nocookie.com/embed/QQ2BuoXqErk" title="Coheronia prologue video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <figcaption>Coheronia prologue capture.</figcaption>
</figure>

<figure class="media-frame">
  <div class="video-embed">
    <iframe src="https://www.youtube-nocookie.com/embed/-KxICidJK2A" title="Coheronia gameplay video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <figcaption>Coheronia gameplay capture.</figcaption>
</figure>

The project therefore developed a stronger verification spine: explicit acceptance criteria, automated tests, visual review, regression captures, fallback rules, and evidence showing what had actually been examined.

Automated validation catches repeatable failures. Operator review catches proportion, context, drift, and whether the result belongs in the product at all.

Coheronia made the relocated bottleneck impossible to miss:

AI reduced the cost of trying. It did not reduce the cost of deciding what deserved to survive.

## Three Projects, One Systems Problem

Atlas moves the bottleneck from task completion to readiness.

Bag of Holding moves it from retrieval to authority.

Coheronia moves it from generation to acceptance.

Their visible outputs are different, but the underlying design problem is the same:

How do we move work across a boundary without losing the distinctions that make it trustworthy?

The boundary might be a clinical handoff, the transition from a private draft to a public artifact, the moment an AI proposal becomes an accepted work item, or the gap between generated code and verified behavior.

In each case, information has to become an operational picture. Activity has to become evidence. A proposal has to become a reviewed decision.

The artifact changes. The obligation does not.

## My Clinical Background Became A Design Discipline

My clinical background did not become irrelevant when I began developing software. It became the reason I cared about state, escalation, provenance, and the quality of the transition between one person's work and another person's decision.

Clinical practice trained me to recognize when formal completion hides unresolved risk, when an isolated measurement obscures a trajectory, and when responsibility exists on paper but not in practice. It also trained me to work under imperfect information, translate among specialized roles, and make uncertainty explicit enough to support action.

Systems work gave me additional mechanisms for acting on those problems.

A handoff can be modeled as state transfer. A documentation gap can be treated as an information-architecture failure. An unclear escalation path can be redesigned as a workflow and ownership problem. A copied-forward assumption becomes a provenance problem. An AI-generated recommendation becomes a question of authority, review, and acceptance.

Those translations create concrete design requirements. They determine what a system must make visible, where a review step belongs, which distinctions cannot safely be collapsed, and what evidence is required before action should follow.

This is where I do my best work: at the boundary between clinical reality, operational workflow, and technical systems.

I am most useful when clinicians, operators, analysts, designers, and engineers are looking at the same problem from different angles; when the data describes one reality, the workflow another, and the software a third; and when someone needs to identify the hidden failure mode, define what success actually means, and connect implementation to evidence.

Depending on the organization, that work may sit within clinical informatics, implementation, workflow design, product operations, solutions architecture, knowledge systems, quality and safety, or human-in-the-loop AI.

The title changes.

The systems problem does not.

## A Portfolio As An Evidence Surface

That is why I treat my portfolio less like a gallery and more like an evidence surface.

The public posts, projects, screenshots, and repositories are not the whole system. They are the exposed layer of a larger process involving drafts, tests, rejected approaches, private context, and reviewed decisions.

Their purpose is not simply to display output. It is to make my operating method inspectable: how I frame an ambiguous problem, translate it across domains, use AI without surrendering judgment, and test whether the result still serves its intended purpose.

## The Work After Automation

The central question is no longer only, "What can this system produce?"

As production accelerates, value shifts toward deciding what deserves trust, which boundaries apply, and who is accountable for the consequence.

Good systems make those decisions visible. Good teams do not treat verification as friction added after innovation; they design it into the operating model.

Technology does not replace the work. It moves the bottleneck: from production to judgment, from access to interpretation, and from activity to accountable action.

In healthcare, that movement can determine whether a handoff transfers care or merely transfers data. In AI-assisted work, it determines whether an output becomes a decision someone can stand behind or another piece of unreviewed noise.

Designing that transition is the work after automation.

It is also where I am most useful.

---

Related work: [Project Atlas](/projects/project-atlas) | [Bag of Holding](/projects/bag_of_holding) | [Coheronia](/projects/coheronia)
