# Nepal and Ecuador case-study supplement

This supplement contains the 48 cases used in the paper's separate Nepal/Ecuador case study. It is kept separate from the 1,306-case SeisMLLM-1K core dataset and its train/test split.

| Event | Cases | Selected images |
| --- | ---: | ---: |
| 2015 Nepal earthquake | 24 | 191 |
| 2016 Ecuador earthquake | 24 | 191 |
| Total | 48 | 382 |

Only images actually referenced by the retained case-study annotations are included. Additional unreferenced files in the internal working folder are not part of this supplement.

## Files and images

- `annotations.json`: the retained case-study assessment records. Image paths resolve relative to this folder. Server-specific `origin_path` values were removed; labels were preserved.
- `inputs.json`: image and event-metadata inputs without assistant answers, for inference. Its paths resolve relative to the repository root.
- `image_manifest.csv`: one row per selected image, including original filename, source building identifier, source citation, license, size and SHA-256.
- `sources.json` and `CITATIONS.bib`: source credits, persistent identifiers and citations.

The original-resolution photographs are distributed as four image archives in the [case-study release](https://github.com/MAYIXUAN836/SeisMLLM-1K-Dataset/releases/tag/case-study-v1.0). Download `Nepal-Ecuador-images-01.tar.gz` through `Nepal-Ecuador-images-04.tar.gz` and extract each at the repository root. They populate `case_study/images/E1/` and `case_study/images/E2/`.

```bash
for part in Nepal-Ecuador-images-0{1,2,3,4}.tar.gz; do
  tar -xzf "$part"
done
```

## Annotation schema and provenance

The numbered assessment fields `1_earthquake_id` through `9_image_descriptions` follow the core [field dictionary](../DATA_DICTIONARY.md). `6_evaluation` contains six Damage Conditions (DC), and `8_final_status` contains the Green/Yellow/Red posting and reasoning. This supplement uses numbered JSON fields; it does not use the legacy `[CDD]` conversation tag.

Additional record fields are `case_id` (E1C1-E1C24 or E2C1-E2C24), `earthquake_folder` (E1 or E2), `images`, `image_count`, and the retained `processing_timestamp`. E1/E2 are supplement-specific event IDs, not the core dataset's event numbering.

These structured assessment records are model-assisted annotations informed by multi-view photographs and source context. The retained case-study annotation script uses GPT-4o; manual-review and correction tools are present in the working materials. This release does not contain a complete item-level human-review history, and the labels should not be represented as independently certified ATC-20 inspection outcomes or verbatim DEEDS labels. In particular, source structural/wall-damage categories and the source map colors are not equivalent to these Green/Yellow/Red safety postings.

## Sources, citation and permissions

1. Prateek Shah, Santiago Pujol, Aishwarya Puranam and Lucas Laughery (2016), *2015 Nepal Earthquake Building Performance Database*. DEEDS / DataCenterHub. [DOI: 10.7277/Z82F-0728](https://doi.org/10.7277/Z82F-0728). [Official source and license](https://datacenterhub.org/landingpages/537/537_LandingPage.html).
2. Chungwook Sim, Enrique Villalobos, Jhon Paul Smith, Pedro Rojas, Aishwarya Y Puranam, Lucas Laughery and Santiago Pujol (2016), *2016 Ecuador Earthquake*. DEEDS / DataCenterHub. [DOI: 10.7277/ZFK0-Q384](https://doi.org/10.7277/ZFK0-Q384). [Official source and license](https://datacenterhub.org/landingpages/535/535_LandingPage.html).

Cite both the applicable original dataset and the SeisMLLM paper; BibTeX is in [CITATIONS.bib](CITATIONS.bib).

The SeisMLLM authors' original annotation/documentation contributions are covered by the scoped **CC BY-NC 4.0** notice in [LICENSE](LICENSE). **The source photographs and source materials retain CC BY-SA 3.0**, as stated on both official landing pages. The NonCommercial restriction does not apply to the source photographs. Any adapted source material must comply with its original license. Selection and renaming are recorded in the manifest; photographs are supplied without pixel edits. No source-author endorsement is implied.
