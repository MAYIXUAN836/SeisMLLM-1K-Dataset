# SeisMLLM-1K: released annotation fields

This dictionary describes the core JSON files in the public release. The separate 48-case supplement is documented in [case_study/README.md](case_study/README.md).

## File roles and counts

| File | Role | Records | Image references |
| --- | --- | ---: | ---: |
| `Full_GT.json` | Complete released case annotations | 1,306 | 3,421 |
| `train.json` | Training conversation export | 1,241 | 3,213 |
| `test.json` | Test conversation export | 65 | 208 |
| `dataset_info.json` | Loader registration for the two conversation exports | — | — |

Each data file is a JSON array. The train and test image sets are disjoint and together reference all 3,421 released dataset image files. The paper reports 3,856 images and a 9:1 experimental partition; the public export is approximately 95:5. These should not be presented as the same split. The historical image-count discrepancy remains unresolved. Internal validation subsets, retrieval copies and the separate Nepal/Ecuador case study are not additional cases in these release counts.

## `Full_GT.json`

All 1,306 records contain the following top-level fields.

| Field | Type / members | Meaning |
| --- | --- | --- |
| `1_earthquake_id` | Object: `name`, `date`, `magnitude`, `location` | Event context, retained as strings. |
| `2_view_type` | String | Inspection / image scope described in the annotation. |
| `3_primary_occupation` | Object: `visual_evidence`, `category` | Building-use category and supporting description. This is the released spelling of the field. |
| `4_type_of_construction` | Object: `visual_evidence`, `category` | Structural construction category and supporting description. |
| `5_stories` | Object: `over_ground`, `under_ground` | Reported story counts; values may be `null`. A missing count is not a count of zero. |
| `6_evaluation` | Object with six condition objects listed below | Damage Conditions (DC): each condition has a `status` and `description`. |
| `7_estimated_building_damage` | String | Recorded estimated damage range. It is an annotation estimate, not a calibrated confidence score. |
| `8_final_status` | Object: `status`, `reasoning` | Safety posting and its recorded rationale. |
| `9_image_descriptions` | Object mapping image-reference strings to descriptions | Available single-image descriptions. Coverage is incomplete; see the path caveat below. |
| `case_index` | Integer | Legacy annotation-record index. |
| `case_id` | String | Legacy annotation-record identifier, such as `case_0001`. It is not a reliable join key for the current image-folder names. |
| `category` | String | Source event-group label. |
| `dataset_images` | Array of strings | Images associated with the annotation record, with a legacy `Dataset/` prefix and, in many records, outdated folder names. |

### Six damage conditions

Each value in `6_evaluation` is an object with `status` and `description`.

| JSON key | Condition |
| --- | --- |
| `1_collapse_partial_collapse_or_building_off_foundation` | Collapse, partial collapse or off foundation |
| `2_building_or_story_leaning` | Building or story leaning |
| `3_racking_damage_to_walls_other_structural_damage` | Racking, wall or other structural damage |
| `4_chimney_parapet_or_other_falling_hazard` | Chimney, parapet or other falling hazard |
| `5_ground_slope_movement_or_cracking` | Ground / slope movement or cracking |
| `6_others` | Other hazards |

The exact `status` strings observed in this release are `Minor/none`, `Moderate`, `Severe` and `Not visible from the provided images`. The last value expresses limited visibility and must not be converted into `Minor/none`. `description` is supporting text, not another severity category.

### Safety posting

`8_final_status.status` contains the posting. Counts in the inspected release are:

| Exact value | Records |
| --- | ---: |
| `(1) Inspected (Green)` | 301 |
| `(2) Restricted Use (Yellow)` | 265 |
| `(3) Unsafe (Red)` | 740 |

`8_final_status.reasoning` contains the annotation's justification. These are dataset annotations, not certificates authorizing building occupancy.

## Conversation exports: `train.json` and `test.json`

Each record contains:

- `messages`: a user task and an assistant report, each with `role` and `content` strings.
- `images`: an ordered array of image paths. The user content uses `<image>` placeholders.

The canonical assistant reports use `[IS]`, `[PO]`, `[CT]`, `[SN]`, `[DC]` and `[SID]`. **`[DC]` contains the six damage-condition statuses and their descriptions**, populated from `6_evaluation`. Neither export includes a dedicated safety-posting field. Use `Full_GT.json` for the postings and reasoning.

## Image identifiers and known path limitations

The repository stores images under `SeisMLLM-1K/case_XXXX/`. The conversation exports resolve against these files after removing the leading `Dataset/` from their `images` entries.

`Full_GT.json` uses a different legacy folder numbering in many records. After removing `Dataset/`, **2,709 of its 3,421 `dataset_images` references do not resolve as written**. Every referenced full image filename, including its extension, is unique and present somewhere in the released image directory. Until the folder references are reconciled, associate annotations and images using those full filenames; do not join by record position or assume `Full_GT.json.case_id` equals the current image-folder ID.

There are **3,209 image-description entries**, of which **64 name files absent from the released image directory**. Conversely, not every released image has an image-description entry. Do not invent captions for missing entries or silently attach an unmatched description to a different image. The path issue and incomplete caption coverage remain release limitations; this documentation update does not repair or renumber the data.

## Annotation provenance and permissions

Section 3.1.1 of the paper describes a model-assisted annotation process using multi-view imagery, event metadata and expert field notes, followed by human verification and adjudication of ambiguous cases. The source reports and atlases supply evidence and context; the structured dataset labels should not be described as verbatim official inspection labels. The released records contain neither item-level review histories nor a generation-model identifier.

Original contributions are licensed as scoped in [LICENSE](LICENSE). Third-party photographs and other source materials retain their original rights and terms. See the [README](README.md) for source acknowledgements and the paper reference.
