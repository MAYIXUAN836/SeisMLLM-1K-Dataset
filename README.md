# SeisMLLM-1K: A Multimodal Dataset for Post-Earthquake Building Safety Evaluation

**SeisMLLM-1K** is a specialized multimodal dataset designed for training Large Vision-Language Models (LVLMs) to perform professional structural safety assessments of buildings damaged by earthquakes. 

The dataset follows the **ATC-20** (Applied Technology Council) standards and focuses on the "Stage 1: Understanding" phase of rapid visual screening. It pairs multi-view images of damaged buildings with detailed, structured engineering reports.

## 📂 Repository Structure

```
├── SeisMLLM-1K/            # Image directory containing case folders (e.g., case_0001/)
├── train.json              # Training set in ShareGPT format
├── test.json               # Test/Validation set
├── Full_GT.json            # Complete ground truth data
├── dataset_info.json       # Dataset metadata and format configuration
└── README.md
```

## 📊 Dataset Statistics

- **Total Cases**: ~1,000 unique building cases.
- **Domain**: Computer vision, Rapid post-earthquake assessment for buildings, Structural Health Monitoring, MLLM.
- **Images**: Photos from real earthquake sites report (e.g., Jiuzhaigou, etc.).

## 📝 Data Format

The dataset uses the standard JSON format compatible with training frameworks like **LLaVA**, **Qwen-VL**, or **Swift**.

### Example Entry

```json
{
  "messages": [
    {
      "role": "user",
      "content": "<image><image>... Earthquake Metadata: Name: Jiuzhaigou Earthquake...\nTask: Act as a structural engineer. Analyze the provided images and generate a Stage 1: Understanding report..."
    },
    {
      "role": "assistant",
      "content": "### Stage 1: Understanding\n[IS]: Exterior and interior\n[PO]: Evidence: ...; Category: Commercial\n[CT]: Evidence: ...; Category: Confined masonry\n[SN]: Over ground: 3\n[CDD]: collapse: Severe (...); building: Severe (...); ...\n[SID]:\n- E1_C001_I01.jpg: Exterior view..."
    }
  ],
  "images": [
    "Dataset/SeisMLLM-1K/case_0001/E1_C001_I01.jpg",
    "Dataset/SeisMLLM-1K/case_0001/E1_C001_I02.jpg"
  ]
}
```

## 🏷️ Annotation Schema

The model is trained to output a structured report containing the following fields:

| Field | Full Name | Description |
| :--- | :--- | :--- |
| **[IS]** | Image Scope | Viewpoints covered (e.g., Exterior, Interior, Detail). |
| **[PO]** | Primary Occupation | Usage category (e.g., Residential, Commercial, School). |
| **[CT]** | Construction Type | Structural system (e.g., Confined Masonry, RC Frame). |
| **[SN]** | Stories Number | Count of stories over/under ground. |
| **[CDD]** | Condition of Damage | Detailed severity rating (Minor/Moderate/Severe) for 6 specific hazards (collapse, leaning, racking, etc.). |
| **[SID]** | Specific Image Desc | Captioning for each individual image provided in the prompt. |

## 🚀 Usage

This dataset is ready for **Supervised Fine-Tuning (SFT)** of Multimodal LLMs.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YourUsername/SeisMLLM-1K.git
   cd SeisMLLM-1K
   ```

2. **Load Data (Python)**:
   ```python
   import json
   
   with open('train.json', 'r') as f:
       data = json.load(f)
       
   print(f"Loaded {len(data)} training samples.")
   ```

3. **Training**:
   Ensure your training framework supports Multi-image inputs if you plan to use all images per case. The `images` field contains relative paths to the `SeisMLLM-1K/` directory.

## ⚠️ License & Disclaimer

## 📚 Data Sources & Acknowledgements

The SeisMLLM-1K dataset is curated and annotated based on professional earthquake reconnaissance reports and public cyberinfrastructures. We gratefully acknowledge the following sources:

### Primary Data Sources
- **China Earthquake Damage Records**: Images and structural descriptions for the Jiuzhaigou, Yushu, and Lushan earthquakes are sourced from the following authoritative records:
  - *Dai et al. (2018):* Engineering Seismic Damage of Jiuzhaigou Ms 7.0 Earthquake.
  - *Sun et al. (2016):* Seismic Damage of Yushu Ms 7.1 Earthquake.
  - *Sun et al. (2014):* Atlas of Building Seismic Damage from the Lushan "4.20" Ms 7.0 Earthquake.
- **DesignSafe-CI & StEER**: A portion of the data is collected from the [DesignSafe](https://www.designsafe-ci.org/) cyberinfrastructure, specifically contributed by the **Structural Extreme Events Reconnaissance (StEER)** network.

### BibTeX Reference
If you use this dataset or the SeisMLLM framework in your research, please cite our work and the original data sources:

```latex
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

This dataset is intended for **research purposes only**. The assessments generated by models trained on this data should **NOT** replace on-site evaluation by certified professional engineers.
---
*Created for the SeisMLLM Project.*

# SeisMLLM-1K: A Multimodal Dataset for Post-Earthquake Building Safety Evaluation

**SeisMLLM-1K** is a specialized multimodal dataset designed for training Large Vision-Language Models (LVLMs) to perform professional structural safety assessments of buildings damaged by earthquakes. 

The dataset follows the **ATC-20** (Applied Technology Council) standards and focuses on the "Stage 1: Understanding" phase of rapid visual screening. It pairs multi-view images of damaged buildings with detailed, structured engineering reports.

## 📂 Repository Structure

```
├── SeisMLLM-1K/            # Image directory containing case folders (e.g., case_0001/)
├── train.json              # Training set in ShareGPT format
├── test.json               # Test/Validation set
├── Full_GT.json            # Complete ground truth data
├── dataset_info.json       # Dataset metadata and format configuration
└── README.md
```

## 📊 Dataset Statistics

![Dataset statistics](dataset_statistics.pdf)

- **Total Cases**: ~1,000 unique building cases (implied by 1K naming).
- **Format**: ShareGPT (List of `{messages, images}` objects).
- **Domain**: Civil Engineering, Disaster Response, Structural Health Monitoring.
- **Images**: High-resolution photos taken from real earthquake sites (e.g., Jiuzhaigou, etc.).

## 📝 Data Format

The dataset uses the standard JSON format compatible with training frameworks like **LLaVA**, **Qwen-VL**, or **Swift**.

### Example Entry

```json
{
  "messages": [
    {
      "role": "user",
      "content": "<image><image>... Earthquake Metadata: Name: Jiuzhaigou Earthquake...\nTask: Act as a structural engineer. Analyze the provided images and generate a Stage 1: Understanding report..."
    },
    {
      "role": "assistant",
      "content": "### Stage 1: Understanding\n[IS]: Exterior and interior\n[PO]: Evidence: ...; Category: Commercial\n[CT]: Evidence: ...; Category: Confined masonry\n[SN]: Over ground: 3\n[CDD]: collapse: Severe (...); building: Severe (...); ...\n[SID]:\n- E1_C001_I01.jpg: Exterior view..."
    }
  ],
  "images": [
    "Dataset/SeisMLLM-1K/case_0001/E1_C001_I01.jpg",
    "Dataset/SeisMLLM-1K/case_0001/E1_C001_I02.jpg"
  ]
}
```

## 🏷️ Annotation Schema

The model is trained to output a structured report containing the following fields:

| Field | Full Name | Description |
| :--- | :--- | :--- |
| **[IS]** | Image Scope | Viewpoints covered (e.g., Exterior, Interior, Detail). |
| **[PO]** | Primary Occupation | Usage category (e.g., Residential, Commercial, School). |
| **[CT]** | Construction Type | Structural system (e.g., Confined Masonry, RC Frame). |
| **[SN]** | Stories Number | Count of stories over/under ground. |
| **[CDD]** | Condition of Damage | Detailed severity rating (Minor/Moderate/Severe) for 6 specific hazards (collapse, leaning, racking, etc.). |
| **[SID]** | Specific Image Desc | Captioning for each individual image provided in the prompt. |

## 🚀 Usage

This dataset is ready for **Supervised Fine-Tuning (SFT)** of Multimodal LLMs.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YourUsername/SeisMLLM-1K.git
   cd SeisMLLM-1K
   ```

2. **Load Data (Python)**:
   ```python
   import json
   
   with open('train.json', 'r') as f:
       data = json.load(f)
       
   print(f"Loaded {len(data)} training samples.")
   ```

3. **Training**:
   Ensure your training framework supports Multi-image inputs if you plan to use all images per case. The `images` field contains relative paths to the `SeisMLLM-1K/` directory.

## ⚠️ License & Disclaimer

This dataset is intended for **research purposes only**. The assessments generated by models trained on this data should **NOT** replace on-site evaluation by certified professional engineers.

---
*Created for the SeisMLLM Project.*
