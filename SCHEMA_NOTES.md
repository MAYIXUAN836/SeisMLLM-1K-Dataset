# CDD and DC: terminology and export history

The paper distinguishes **Case Damage Description (CDD)** from **Damage Conditions (DC)**. CDD is descriptive perceptual evidence; DC is the set of six ordinal severity judgments. Section 2.1.2 and Table 1 define this distinction. Appendix A makes the intended boundary explicit: Stage 1 emits six condition descriptions, and the later judgment stage assigns the condition statuses and safety posting.

The retained conversation exports use a different legacy interface. Both original dataset preparation scripts (`prepare_vlm_dataset.py` and `prepare_vlm_dataset_v2.py`) read `6_evaluation`, concatenate **each condition's status and description**, and write that combined text under `[CDD]`. The source values are DC values and supporting descriptions; the tag does not represent a separate paper-defined CDD annotation. The earlier README expansion “Condition of Damage” perpetuated the naming confusion.

The retained inference adapter `full_json_to_stage1_fields` uses the same convention: `6_evaluation` becomes a string stored in `CDD`, including statuses. The retained model prompt also asks for a full assessment JSON. Although the judgment input removes statuses from `6_evaluation`, the earlier rule-query path still sees the combined status/description string, and other assessment fields can remain in the full prediction. Consequently, this retained implementation should not be assumed to enforce the paper's description-only perception boundary. This is a version/interface inconsistency as well as a field-name mismatch; changing a tag alone does not resolve the stage separation.

| Released content | Meaning |
| --- | --- |
| `Full_GT.json` → `6_evaluation.*.description` | Descriptive evidence for each condition |
| `Full_GT.json` → `6_evaluation.*.status` | Damage Conditions (DC), ordinal severity |
| `train.json` / `test.json` → `[CDD]` | Legacy combination of those descriptions and DC statuses |
| `Full_GT.json` → `8_final_status` | Safety posting and rationale |
| `case_study/annotations.json` → `6_evaluation` / `8_final_status` | Numbered DC and safety-posting fields, without the legacy `[CDD]` tag |

For existing consumers, `[CDD]` remains unchanged in the legacy files. Treat its condition ratings as DC when analyzing this release. No independent free-text CDD summary or missing safety-posting tag has been synthesized to make the export resemble the paper. The complete released field definitions and path limitations are in [DATA_DICTIONARY.md](DATA_DICTIONARY.md). This note records the retained source behavior; it does not establish which historical script or checkpoint produced every paper result.
