# Trigger Tests

Use these cases to review the frontmatter description. Evaluate the description alone before reading the Skill body.

## Should trigger: evidence-heavy formal artifact

> 请结合本地旧提案和 2026 年官方数据，写一篇哈尔滨养老服务咨政报告，先做语义去重，再保存为可编辑 Word，并检查版式和来源。

Expected: trigger. The request creates a consequential formal deliverable and explicitly requires prior-work preservation, current evidence, de-duplication, editability, and visual QA.

## Should trigger: business-system implementation

> 检查日仕福库存导入模块，修复负库存标记，跑完测试并给出可回滚交付；只读核对 ERP，不要写回生产数据。

Expected: trigger. The request changes a repository, touches authoritative business data, sets a permission boundary, and requires technical verification.

## Should not trigger: lightweight language task

> 把“明天下午见”翻译成英文。

Expected: do not trigger. This is a self-contained translation with no consequential deliverable, evidence boundary, project state, or external action.

## Pass criteria

- Both positive cases are selected from the description without relying on the Skill name or body.
- The negative case is excluded by an explicit boundary in the description.
- If a positive case is missed, add the missing capability or consequence signal to the description.
- If the negative case is selected, narrow the description; do not add a growing list of superficial exceptions.

## Execution scenarios

Review the loaded Skill and applicable references against these scenarios. These are test specifications, not evidence that live execution has passed. Simulate external actions only; never send real mail or change production state merely to run a test.

| Scenario | Expected observable behavior |
|---|---|
| User specifies the exact final recipient, body, attachment version and approves sending; nothing changes | Verify the authorization and execute only if permitted by the tool and other applicable rules; do not ask for the identical approval again. Verify Sent afterwards. |
| Attachment version changes after approval | Obtain approval for the changed content; do not reuse old final-content authorization. |
| Notion is inaccessible but sufficient relevant local sources exist | Continue independent research/drafting, report limited de-duplication coverage; do not claim all prior work was checked. |
| Topic and evidence are supplied and the user requests a complete policy report without naming a file format | Apply the policy profile and produce an editable Word after content and page checks without asking whether Word is needed. |
| User asks to review or improve this Skill and says Word output must be included in its future behavior | Review/update instructions as authorized; do not generate an unrelated Word audit report or execute a policy-writing task. |
| User asks for a topic/preview only, or requires preview approval before writing | Provide only that stage; do not author the report or generate Word before approval. |
| A 2026 publication reports only 2025 measurements | Keep publication date separate from statistical period; do not use it as 2026 measurements or silently relax the strict profile. |
| One proposed problem has no qualifying supporting case/data | Seek evidence or restructure within the requested scope; do not invent support or label an incomplete draft submission-ready. Continue independent work. |
| User requests a prose-only local Skill change | Check frontmatter, references and instruction consistency; do not require deployment or unrelated code build tests. |
| Only the local artifact is verified; an external send result is ambiguous | Report local completion separately; check Sent before any retry, never assert recipient reading or silently resend. |
