---
name: linnan-project-delivery
description: Apply Liu Renhui's evidence-first delivery workflow to non-trivial project work that researches, drafts, builds, edits, audits, integrates, or operates policy materials, courseware, knowledge systems, business data, office artifacts, repositories, or external communications. Trigger when the request will create or change a consequential deliverable or project state and therefore needs source traceability, preservation of existing work, least-privilege execution, approval boundaries, or outcome verification. Do not trigger for casual conversation, simple factual Q&A, translation or light rewriting, isolated one-line commands, or open-ended brainstorming with no consequential deliverable.
---

# Linnan Project Delivery

Produce a usable, traceable result while preserving source material, authority boundaries, and the user's existing work.

## Necessary inputs

Infer from the available context at the start:

- intended outcome, audience or destination, and delivery format;
- authoritative inputs, relevant existing work, and time or freshness requirements;
- allowed systems and write scope, plus any send, publish, deploy, delete, payment, or production-data authority;
- task-specific acceptance conditions.

Inspect available project context before asking the user to repeat discoverable facts. State reasonable assumptions for non-material gaps and continue. Ask only when a missing choice would materially change the result or require new authority; pause the dependent step, not independent safe work. A request to review a Skill is not a request to execute the workflow described inside it.

## Task-adapted workflow

1. **Scope and preserve.** Identify the project object, requested outcome, current environment, and in-scope files or systems. Inspect relevant prior work and repository state. Preserve originals and unrelated user changes.
2. **Build the evidence boundary.** Separate verified facts, sourced viewpoints, inferences, and unresolved items. Record source, date, and applicability for claims that matter. Mark missing, conflicting, stale, or operationally ambiguous evidence `REVIEW`.
3. **Set the execution boundary.** Choose the simplest deliverable that fully satisfies the requested outcome, scope, length, and format. Keep dynamic business data in its authoritative system. Before external actions apply the single approval rule in [evidence-and-authority.md](references/evidence-and-authority.md#authority-boundaries); do not repeatedly request an unchanged, already-specific approval.
4. **Create or change.** Reuse relevant source material and templates, produce an independent editable result when applicable, and keep the work reproducible or auditable in proportion to risk.
5. **Verify the real outcome.** Match checks to the deliverable and claims: content, structure, sources, and final layout for documents; project-required tests for code; migration, API, or deployment checks only when involved. Distinguish local completion from publication and destination outcome. A click alone does not prove a send. A verified Sent record can prove sending, not recipient reading; do not require inaccessible backend logs when the authoritative record already supports the claimed outcome.
6. **Hand off clearly.** Lead with the outcome. Provide deliverable locations, checks performed, evidence boundaries, unresolved `REVIEW` items, and only the next manual action that remains.

## Output contract

Use the smallest structure that remains auditable:

- outcome and status: `READY`, `REVIEW`, or `BLOCKED`;
- deliverables or changed targets;
- verification evidence;
- boundaries, assumptions, and pending human actions.

For formal artifacts, put citations or source notes in the artifact itself, not only in chat. If the user explicitly requires a source-free submission copy, deliver a separate traceable evidence record instead. Localize `REVIEW` to the affected claims or steps; use `BLOCKED` for an outcome that genuinely cannot proceed without missing input or authority.

For completed policy proposals and advisory reports, deliver an editable Word file by default, without asking whether Word is needed. Read [policy-writing-profile.md](references/policy-writing-profile.md) for the writing and Word acceptance rules. This default does not apply to Skill maintenance, a review-only request, topic selection, previews, or a user request to defer files. Creating a document never authorizes emailing or uploading it.

## Prohibited actions

- Do not invent facts, sources, completion evidence, adoption results, or current external state.
- Do not promote commentary, media summaries, candidate material, or model output into verified fact without primary evidence.
- Do not overwrite source files, discard unrelated changes, expose secrets, or request broad disk/system access when a dedicated scope works.
- Do not send, publish, deploy, post, pay, delete, or write production data without the required authority and exact-target verification under the authority reference. Preserve stricter higher-priority or applicable tool/Skill confirmation requirements.
- Do not claim completion before checking the delivered artifact or final external state.

## Acceptance

The task passes only when:

- the requested outcome is present without silent scope expansion;
- consequential claims have source, date, and evidence status;
- originals and unrelated work remain intact;
- outputs are editable or reproducible when requested;
- format-specific QA and proportional technical checks pass;
- external actions, if authorized, are verified at the recipient, route, or system-of-record level;
- remaining uncertainty and manual steps are explicit.

## Conditional references

Read only what the current task needs:

- Read [references/evidence-and-authority.md](references/evidence-and-authority.md) for current-data research, evidence classification, business systems, integrations, or external mutations.
- Read [references/deliverable-templates.md](references/deliverable-templates.md) only when producing a formal report, editable document/deck/workbook, research ledger, or implementation handoff.
- Read [references/project-patterns.md](references/project-patterns.md) only when the task matches one of the user's recurring policy, personal-courseware, knowledge-system, business-data, or external-communication patterns.
- Read [references/policy-writing-profile.md](references/policy-writing-profile.md) when authoring or substantively revising a policy proposal or advisory report; do not apply its data/length/Word requirements to unrelated tasks or to a review of this Skill itself.
- Read [references/trigger-tests.md](references/trigger-tests.md) only when creating, reviewing, or changing this Skill's trigger behavior.
