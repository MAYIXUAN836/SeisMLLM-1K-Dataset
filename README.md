# SeisMLLM-1K: A Multimodal Dataset for Post-Earthquake Building Safety Evaluation

**[Project Page](https://mayixuan836.github.io/SeisMLLM/)** · **[Paper](https://doi.org/10.1016/j.aei.2026.105126)** · **[Code](https://github.com/MAYIXUAN836/SeisMLLM)**

**SeisMLLM-1K** is a case-level multimodal dataset for post-earthquake building safety assessment. It combines multi-view photographs, earthquake metadata and structured annotations for damage understanding and safety evaluation.

The dataset follows the **ATC-20** and **ATC-20-1** (Applied Technology Council) assessment framework. It pairs multi-view images of damaged buildings with structured engineering annotations.

## Repository Structure

```
├── SeisMLLM-1K/            # Image directory containing case folders (e.g., case_0001/)
├── train.json              # Training set in ShareGPT format
├── test.json               # Test set
├── Full_GT.json            # Complete ground truth annotation
├── dataset_info.json       # Loader registration for the canonical train/test exports
├── case_study/             # Separate Nepal/Ecuador supplement and citations
├── DATA_DICTIONARY.md      # Released field definitions
├── LICENSE
└── README.md
```

## Dataset Statistics

![Dataset statistics](dataset_statistics.png)

The core release contains 1,306 building cases from 17 earthquake event groups. The training and test image sets are disjoint.

| Split | Cases | Images |
| --- | ---: | ---: |
| Training | 1,241 | 3,213 |
| Test | 65 | 208 |
| Total | 1,306 | 3,421 |

These counts describe the files in this repository. Differences from the paper's reported inventory and experimental partition are documented in the [field dictionary](DATA_DICTIONARY.md#file-roles-and-counts). The separate [Nepal/Ecuador supplement](case_study/README.md) contains 48 cases and 382 images and is excluded from the core counts.

## Data Format

`train.json` and `test.json` use a multimodal conversation format. Each record contains `messages` and an ordered `images` list. The `<image>` placeholders in the user message correspond to that image list.

### Example Entry

```json
{
  "messages": [
    {
      "role": "user",
      "content": "<image><image>... Earthquake Metadata: Name: Jiuzhaigou Earthquake...\nTask: Act as a structural engineer. Analyze the provided images and generate a structured building annotation..."
    },
    {
      "role": "assistant",
      "content": "### Structured Building Annotation\n[IS]: Exterior and interior\n[PO]: Evidence: ...; Category: Commercial\n[CT]: Evidence: ...; Category: Confined masonry\n[SN]: Over ground: 3\n[CDD]: Existing condition descriptions combined into case-level text...\n[DC]: collapse: Severe (...); building: Severe (...); ...\n[SID]:\n- E1_C001_I01.jpg: Exterior view..."
    }
  ],
  "images": [
    "Dataset/SeisMLLM-1K/case_0001/E1_C001_I01.jpg",
    "Dataset/SeisMLLM-1K/case_0001/E1_C001_I02.jpg"
  ]
}
```

## Annotation Schema

Reports in `train.json` and `test.json` use the following fields. The [field dictionary](DATA_DICTIONARY.md) provides JSON keys, data types and label definitions.

| Field | Full Name | Description |
| :--- | :--- | :--- |
| **[IS]** | Image Scope | Viewpoints covered (e.g., Exterior, Interior, Detail). |
| **[PO]** | Primary Occupation | Usage category (e.g., Residential, Commercial, School). |
| **[CT]** | Construction Type | Structural system (e.g., Confined Masonry, RC Frame). |
| **[SN]** | Stories Number | Count of stories over/under ground. |
| **[CDD]** | Case Damage Description | Case-level text combining the existing descriptions of the six damage conditions. |
| **[DC]** | Damage Conditions | Severity ratings and supporting descriptions for six damage conditions. |
| **[SID]** | Single Image Description | Descriptions of individual images, where available. |

CDD and DC share the existing condition descriptions: CDD combines their text, while DC retains the individual condition ratings and descriptions. See the [field mapping](DATA_DICTIONARY.md#case-damage-description-cdd).

### Data Files

| File | Contents |
| --- | --- |
| `Full_GT.json` | Case annotations, including earthquake metadata, building attributes, six damage conditions, safety postings and assessment reasoning. |
| `train.json` | Training conversations with image inputs and structured understanding reports. |
| `test.json` | Test conversations in the same format as the training set. |
| `dataset_info.json` | Loader configuration: `seismllm_train` loads `train.json`; `seismllm_test` loads `test.json`. |

Safety postings and their reasoning are stored in `Full_GT.json` under `8_final_status`. The conversation files provide the report fields listed above.

### Image Paths

Images are stored under `SeisMLLM-1K/case_XXXX/`. Paths in the annotation files include a leading `Dataset/`; remove this prefix when resolving them from the repository root. Use the provided image paths to associate annotations with photographs, since annotation `case_id` values and image-folder names are distinct identifiers.

Image-level description coverage is documented in the [field dictionary](DATA_DICTIONARY.md#image-paths-and-caption-coverage).

## Case-Study Supplement

The [Nepal/Ecuador supplement](case_study/README.md) includes case-level annotations, inference inputs without answers, a per-image source/filename/rights manifest, and original-data citations. Original-resolution images are available through the linked release archives. The authors’ original contributions use the scoped CC BY-NC 4.0 notice; these two sources’ photographs and source materials retain their original **CC BY-SA 3.0** license. See the supplement’s [LICENSE](case_study/LICENSE) and [citations](case_study/CITATIONS.bib).

## Usage

This dataset is ready for **Supervised Fine-Tuning (SFT)** of Multimodal LLMs.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MAYIXUAN836/SeisMLLM-1K-Dataset.git
   cd SeisMLLM-1K-Dataset
   ```

2. **Load Data (Python)**:
   ```python
   import json
   
   with open('train.json', 'r') as f:
       data = json.load(f)
       
   print(f"Loaded {len(data)} training samples.")
   ```

3. **Training**:
   Ensure your training framework supports Multi-image inputs if you plan to use all images per case. The `images` field contains relative paths to the `SeisMLLM-1K` directory.

## License and Disclaimer

The SeisMLLM authors’ original annotation contributions and original documentation are licensed under **[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)**, to the extent the authors hold the rights to license them. See [LICENSE](LICENSE) for the scope and the link to the complete license terms.

For those licensed contributions, noncommercial research use, derivative annotations and publication of aggregate research results are permitted subject to the license, including attribution and identification of changes. This permission is not a blanket license for third-party photographs, inspection reports, atlas excerpts or other source material. Those materials retain their original rights and applicable terms; users must obtain any additional permissions needed for their intended use. No single image license has been verified for the entire collection. The paper’s publication license does not automatically license the dataset.

This dataset is intended as a research resource. Its annotations and model outputs do not replace an on-site safety evaluation by qualified professionals.

## Data Sources and Acknowledgements

Images and contextual records were collected from earthquake reconnaissance reports, earthquake atlases and public cyberinfrastructures. These source materials should be distinguished from the structured labels created for SeisMLLM-1K.

As described in Section 3.1.1 of the [paper](https://doi.org/10.1016/j.aei.2026.105126), annotation was model-assisted: initial structured drafts used multi-view images, event metadata and expert field notes, with three expert-verified anchor cases. The paper reports manual checking by two annotators with structural and earthquake engineering backgrounds and third-reviewer adjudication for ambiguous or conflicting cases. The released labels should therefore be described as **model-assisted annotations with human verification, informed by reconnaissance materials**, rather than as a verbatim release of official inspection labels or wholly independent expert-only annotations. Individual JSON records do not include reviewer identities, item-level review histories or a generation-model identifier.

We gratefully acknowledge the following sources:

### Primary Data Sources
- **China Earthquake Damage Records**: Images and structural descriptions for the Jiuzhaigou, Yushu, and Lushan earthquakes are sourced from the following authoritative records:
  - *Dai et al. (2018):* Engineering Seismic Damage of Jiuzhaigou Ms 7.0 Earthquake.
  - *Sun et al. (2016):* Seismic Damage of Yushu Ms 7.1 Earthquake.
  - *Sun et al. (2014):* Atlas of Building Seismic Damage from the Lushan "4.20" Ms 7.0 Earthquake.
- **DesignSafe-CI & StEER**: A portion of the data is collected from the [DesignSafe](https://www.designsafe-ci.org/) cyberinfrastructure, specifically contributed by the **Structural Extreme Events Reconnaissance (StEER)** network.

### BibTeX Reference
If you use this dataset or the SeisMLLM framework in your research, please cite our work ([CITATION.bib](CITATION.bib)) and the original data sources. The separate supplement also provides [source-specific citations](case_study/CITATIONS.bib):

```latex
@article{ma2026seismllm,
  title = {A dual-retrieval augmented Multimodal Large Language Model
           framework for automatic post-earthquake building safety evaluation},
  author = {Ma, Yixuan and Jiang, Jun and Wang, Shuo and Liu, Jiahui
            and Qi, Xiaojuan and Wang, Xuguang},
  journal = {Advanced Engineering Informatics},
  volume = {76},
  pages = {105126},
  year = {2026},
  doi = {10.1016/j.aei.2026.105126},
  url = {https://doi.org/10.1016/j.aei.2026.105126}
}

@article{sun2014lushan,
  title={Atlas of Building Seismic Damage from the Lushan "4.20" Ms 7.0 Strong Earthquake in Sichuan (in Chinese)},
  author={Sun, Baitao and Yan, Peilei and Wang, Mingzhen and Zhang, Haoyu and Chen, Xiangzhao},
  year={2014},
  publisher={Seismological Press}
}

@article{sun2016yushu,
  title={Seismic Damage of Yushu Ms 7.1 Earthquake in Qinghai (in Chinese)},
  author={Sun, Jingjiang and Li, Shanyou and Dai, Junwu and Gong, Maosheng},
  year={2016},
  publisher={Seismological Press}
}

@article{dai2018jiuzhaigou,
  title={Engineering Seismic Damage of Jiuzhaigou Ms 7.0 Earthquake in Sichuan (in Chinese)},
  author={Dai, Junwu and Sun, Baitao and Xiong, Lihong and Tao, Zhengru and Ma, Qiang and Lin, Junqi},
  year={2018},
  publisher={Seismological Press}
}

@article{rathje2017designsafe,
  title={DesignSafe: A new cyberinfrastructure for natural hazards engineering},
  author={Rathje, Ellen M and others},
  journal={Natural Hazards Review},
  year={2017}
}

@article{kijewski2019structural,
  title={Structural extreme events reconnaissance (StEER) network: A new model for post-disaster data collection},
  author={Kijewski-Correa, Tracy and others},
  journal={Frontiers in Built Environment},
  year={2019}
}

```

---
*Created for the SeisMLLM Project.*
