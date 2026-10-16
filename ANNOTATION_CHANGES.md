# Annotation changes

## 2026-10-16: Complete basement counts in training exports

Added the existing `5_stories.under_ground` values from `Full_GT.json` to the `[SN]` lines of eight training reports. The per-case `GT.json` files agree with these source values. This completes the conversation export without relabeling the cases: all other report fields, the complete annotations, test export and split membership are unchanged.

| Image case folder | Legacy annotation ID | Underground stories |
| --- | --- | ---: |
| case_0093 | case_0093 | 1 |
| case_0308 | case_1073 | 0 |
| case_0340 | case_1105 | 1 |
| case_0343 | case_1108 | 0 |
| case_0345 | case_1110 | 0 |
| case_0346 | case_1111 | 0 |
| case_0759 | case_0405 | 2 |
| case_0922 | case_0568 | 1 |

All 1,306 released reports were checked against `Full_GT.json` for both above-ground and underground story counts after this export correction.

## 2026-10-16: Primary Occupation corrections

Corrected the PO category and its visual-evidence text in 45 core cases (41 training, 4 test). The previous PO value, `Bottom-frame masonry`, describes construction rather than building use. The corrections are synchronized across `Full_GT.json`, per-case `GT.json` files, and the conversation exports.

Review method: case-by-case AI-assisted inspection of all 161 released images in these cases, including inspection-form images where present, at the dataset author's request. This maintenance review is separate from the original expert/human-verification workflow described in the paper; it does not constitute a new independent human expert review.

The existing categories are retained: 4 cases are `Commercial`, 7 are `Dwelling`, and 34 are `Other`. `Other` covers 17 cases with mixed-use evidence and no established primary use, and 17 whose primary use cannot be established from the available views. Rolling shutters alone are not treated as proof of commercial occupancy.

Only PO category/evidence fields were changed. CT, the six DC ratings/descriptions, safety postings/reasoning, image descriptions, case counts, image associations and train/test membership are unchanged. Historical paper metrics have not been recomputed for these revised PO labels. Existing retrieval indices should be rebuilt to use the corrected PO text and metadata.

[Before/after annotation record (CSV)](annotation_changes/2026-10-16-po.csv)

| Image case folder | Legacy annotation ID | Split | Corrected PO | Review basis |
| --- | --- | --- | --- | --- |
| [case_0361](SeisMLLM-1K/case_0361/GT.json) | case_1126 | test | Other | mixed use |
| [case_0702](SeisMLLM-1K/case_0702/GT.json) | case_0347 | test | Other | uncertain primary |
| [case_0727](SeisMLLM-1K/case_0727/GT.json) | case_0372 | test | Other | uncertain primary |
| [case_1148](SeisMLLM-1K/case_1148/GT.json) | case_0794 | test | Other | mixed use |
| [case_0053](SeisMLLM-1K/case_0053/GT.json) | case_0053 | train | Commercial | visible commercial |
| [case_0287](SeisMLLM-1K/case_0287/GT.json) | case_1051 | train | Other | uncertain primary |
| [case_0301](SeisMLLM-1K/case_0301/GT.json) | case_1066 | train | Other | mixed use |
| [case_0302](SeisMLLM-1K/case_0302/GT.json) | case_1067 | train | Commercial | visible commercial |
| [case_0304](SeisMLLM-1K/case_0304/GT.json) | case_1069 | train | Other | uncertain primary |
| [case_0329](SeisMLLM-1K/case_0329/GT.json) | case_1094 | train | Commercial | visible commercial |
| [case_0332](SeisMLLM-1K/case_0332/GT.json) | case_1097 | train | Other | mixed use |
| [case_0333](SeisMLLM-1K/case_0333/GT.json) | case_1098 | train | Dwelling | visible residential |
| [case_0335](SeisMLLM-1K/case_0335/GT.json) | case_1100 | train | Other | mixed use |
| [case_0343](SeisMLLM-1K/case_0343/GT.json) | case_1108 | train | Other | mixed use |
| [case_0347](SeisMLLM-1K/case_0347/GT.json) | case_1112 | train | Other | mixed use |
| [case_0355](SeisMLLM-1K/case_0355/GT.json) | case_1120 | train | Other | mixed use |
| [case_0594](SeisMLLM-1K/case_0594/GT.json) | case_0239 | train | Other | mixed use |
| [case_0595](SeisMLLM-1K/case_0595/GT.json) | case_0240 | train | Other | uncertain primary |
| [case_0597](SeisMLLM-1K/case_0597/GT.json) | case_0242 | train | Dwelling | visible residential |
| [case_0615](SeisMLLM-1K/case_0615/GT.json) | case_0260 | train | Other | mixed use |
| [case_0627](SeisMLLM-1K/case_0627/GT.json) | case_0272 | train | Other | uncertain primary |
| [case_0629](SeisMLLM-1K/case_0629/GT.json) | case_0274 | train | Dwelling | visible residential |
| [case_0632](SeisMLLM-1K/case_0632/GT.json) | case_0277 | train | Other | uncertain primary |
| [case_0639](SeisMLLM-1K/case_0639/GT.json) | case_0284 | train | Other | uncertain primary |
| [case_0640](SeisMLLM-1K/case_0640/GT.json) | case_0285 | train | Other | mixed use |
| [case_0641](SeisMLLM-1K/case_0641/GT.json) | case_0286 | train | Other | uncertain primary |
| [case_0642](SeisMLLM-1K/case_0642/GT.json) | case_0287 | train | Other | uncertain primary |
| [case_0713](SeisMLLM-1K/case_0713/GT.json) | case_0358 | train | Dwelling | visible residential |
| [case_0720](SeisMLLM-1K/case_0720/GT.json) | case_0365 | train | Dwelling | visible residential |
| [case_0733](SeisMLLM-1K/case_0733/GT.json) | case_0379 | train | Other | uncertain primary |
| [case_0758](SeisMLLM-1K/case_0758/GT.json) | case_0404 | train | Commercial | visible commercial |
| [case_0759](SeisMLLM-1K/case_0759/GT.json) | case_0405 | train | Other | uncertain primary |
| [case_0764](SeisMLLM-1K/case_0764/GT.json) | case_0410 | train | Dwelling | visible residential |
| [case_0765](SeisMLLM-1K/case_0765/GT.json) | case_0411 | train | Other | uncertain primary |
| [case_0781](SeisMLLM-1K/case_0781/GT.json) | case_0427 | train | Other | uncertain primary |
| [case_0787](SeisMLLM-1K/case_0787/GT.json) | case_0433 | train | Other | mixed use |
| [case_0797](SeisMLLM-1K/case_0797/GT.json) | case_0443 | train | Other | mixed use |
| [case_0814](SeisMLLM-1K/case_0814/GT.json) | case_0460 | train | Other | mixed use |
| [case_0837](SeisMLLM-1K/case_0837/GT.json) | case_0483 | train | Other | uncertain primary |
| [case_0862](SeisMLLM-1K/case_0862/GT.json) | case_0508 | train | Other | uncertain primary |
| [case_0965](SeisMLLM-1K/case_0965/GT.json) | case_0611 | train | Dwelling | visible residential |
| [case_0991](SeisMLLM-1K/case_0991/GT.json) | case_0637 | train | Other | mixed use |
| [case_1095](SeisMLLM-1K/case_1095/GT.json) | case_0741 | train | Other | uncertain primary |
| [case_1120](SeisMLLM-1K/case_1120/GT.json) | case_0766 | train | Other | mixed use |
| [case_1208](SeisMLLM-1K/case_1208/GT.json) | case_0854 | train | Other | mixed use |

### Known building-identity issue, not changed in this revision

`case_1120` (train) and `case_1148` (test) show the same building in different image files, identifiable by the same vehicle/carpet-cleaning sign, facade, balconies and laundry. Their split membership is intentionally unchanged pending a separate split correction. Filename-disjoint checks alone do not establish building-level train/test isolation.
