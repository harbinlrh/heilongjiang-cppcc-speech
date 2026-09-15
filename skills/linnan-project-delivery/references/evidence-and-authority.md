# Evidence and Authority Reference

Use this reference when freshness, factual claims, operational data, permissions, or external side effects matter.

## Evidence classes

| Class | Meaning | Permitted use |
|---|---|---|
| Verified fact | Supported by a current primary or competent-authority source | May support conclusions within the cited scope and date |
| Sourced viewpoint | Attributed interpretation, commentary, interview, or secondary analysis | May explain debate; do not present as settled fact |
| Inference | Reasoning derived from stated evidence | Label as inference and state the basis |
| `REVIEW` | Missing, conflicting, stale, untraceable, or operationally ambiguous evidence | May be listed as a gap; must not drive irreversible action |

For each consequential item retain, as applicable: `source_ref`, publisher or system of record, publication date, retrieval/as-of date, evidence class, applicability boundary, and next verification step.

## Source priority

1. Current authoritative local/system-of-record data for the exact business fact.
2. Laws, regulations, government/court/statistical sources, original research, or competent authorities for formal claims.
3. High-quality secondary sources for context and leads.
4. NotebookLM, video, social media, commentary, and AI output as discovery aids only.

If an authoritative page is inaccessible, keep it as a lead and find another accessible primary source. Do not claim that inaccessible content was read.

## Freshness

Recheck drift-prone facts that affect this task, such as versions, prices, laws, officials, schedules, IDs, paths, repository state, authentication, deployment, permissions, and live business records. Reuse a same-task verification if the relevant state has not changed; recheck near an external action when concurrent changes matter. Reuse procedures from prior work, not stale state. A missing source limits the dependent claim, not unrelated safe work.

## Authority boundaries

- Begin with relevant read-only inspection and dedicated directories or workspaces. When the user requests a local change, proceed within that scope after the necessary checks; read-only is not a permanent gate. A diagnose/review-only request does not authorize implementation.
- Keep credentials in local environment variables or approved secret stores; never place them in source, Git, documents, or chat.
- Separate drafting from sending. Immediately before an external action, verify the exact action, destination, final content, attachment version, and relevant parameters against the user's explicit, specific authorization. Reuse that authorization when its scope is unchanged; ask only for missing approval or a material change. A higher-priority rule or applicable tool/Skill requiring confirmation for every send still applies. General permission to use an account, login success, or installation approval is not approval of a specific external write.
- Treat price, quantity, delivery date, payment terms, recipient, accounting posting, inventory adjustment, and production writes as human-approval fields unless the user explicitly authorizes the exact action.
- For Git or external systems, stage/change only task-owned targets and verify the remote or destination is real rather than a placeholder.
- If an external result is ambiguous, inspect its state before considering another attempt; do not automatically resend, repost, or repeat an irreversible operation. Preserve explicit approval for quotation, payment, deletion, inventory adjustment, publication, and production writes.

## Completion evidence

Distinguish:

- local implementation;
- authorization or login;
- live routing/deployment;
- end-to-end outcome at the destination.

Do not use evidence from one layer to claim another layer is complete.

Use evidence sufficient for the specific claim: a Sent record with matching recipient, subject, and attachment supports sending, not reading; a read-back of the published version supports publication. Report an unverified external result separately from a verified local deliverable.
