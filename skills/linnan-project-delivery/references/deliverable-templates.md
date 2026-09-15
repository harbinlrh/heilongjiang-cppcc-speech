# Deliverable Templates

Use only the template matching the requested output. The user's specified structure takes precedence; do not force every section into every deliverable.

## Formal research or policy report

For policy proposals and advisory reports, follow [policy-writing-profile.md](policy-writing-profile.md), including default editable Word delivery. For other research reports, adapt these components to the request: accurate title, summary, situation and evidence, problem analysis, and recommendations. State responsible actors and executable actions; include funding, metrics, or exit arrangements only when the actual measure needs them. Do not add theory or repeat necessity in policy recommendation paragraphs.

Use brief inline source numbers and a source list or appendix with publisher, date, and direct reference. Evidence classifications and retrieval details may stay in a companion record rather than become extra body chapters. Follow the entrypoint's explicit source-free submission exception. De-duplication scope is defined in [project-patterns.md](project-patterns.md#policy-research-and-proposal-writing), not an additional drafting gate here.

## Editable Word, PowerPoint, or workbook

- Preserve the original and create a new output unless editing in place is explicitly requested.
- Keep text, tables, charts, and notes editable.
- Put source notes close to the relevant claim, slide, table, or appendix.
- Render or open the final artifact and inspect page/slide/sheet layout, overflow, broken characters, hidden cells, formulas, and filenames.
- For submission-ready documents, include required cover fields, approval/attachment items, and confidentiality checks when applicable.

## Research ledger or knowledge-system entry

Recommended fields:

```text
title
policy_or_business_object
source_ref
publisher_or_system_of_record
published_date
as_of_date
evidence_status
applicability_boundary
dedup_state
conversion_or_action_judgment
next_step
```

Keep tasks, owners, live status, contracts, quotations, payments, and dynamic records in the operational system. Store reusable long-term knowledge with source/evidence metadata in the knowledge base.

## Implementation handoff

```text
Status: READY | REVIEW | BLOCKED
Outcome: what now exists or changed
Files/targets: exact paths, links, modules, or records
Verification: commands/checks and results
Boundaries: what was not changed, sent, deployed, or proven
Manual next step: only the action still requiring the user
```

Run project-required checks relevant to the change. Do not demand code build/lint/tests for a prose-only deliverable; use structural and content checks instead. Run migration, API, and deployment checks only when involved. A verified local change can be complete as a local deliverable without being deployed; never imply unverified publication or end-to-end success.
