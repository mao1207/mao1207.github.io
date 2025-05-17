---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# Welcome! 
I am an incoming CS Ph.D. Student at [University of California San Diego](https://cse.ucsd.edu/) (UCSD), advised by [Prof. Lianhui Qin](https://lianhui.ucsd.edu/). Prior to this, I completed my undergraduate studies in the School of Software Engineering at [Tongji University](https://sse.tongji.edu.cn/), where I ranked 1st out of 227 students with a major GPA of 4.99/5.0. During my undergraduate studies, I was also a Visiting Researcher at the [Berkeley NLP Group](https://nlp.cs.berkeley.edu/) within the [Berkeley Artificial Intelligence Research (BAIR) Lab](https://bair.berkeley.edu/), working closely with [Prof. Alane Suhr](https://www.alanesuhr.com/) and [Zineng Tang](https://zinengtang.github.io/).

My research focuses on **natural language processing**, **machine learning**, and **computer vision**. I am particularly interested in enabling vision-language models (VLMs) to perceive, reason, and interact with the world in a more human-like manner, grounded in multimodal context. While recent VLMs have shown impressive progress, there still remains a significant gap between VLMs and humans in handling vision-centric tasks (e.g., 3D world understanding, counting, and visual IQ tests). I am curious about whether we can develop more effective approaches for enabling human-level visual reasoning abilities in these models.

You can find my [CV](https://drive.google.com/file/d/1cYcl2w3z3J7tdv5NVDf3QYNRQ05bsLw6/view?usp=sharing) here. I am always open to any form of collaboration. If you have any ideas for potential collaboration, or just feel like having a casual chat, please feel free to reach out!

<!--I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).-->

<!--插入图片语法为：![Alt](../images/tiktok.png width=200 height=100)-->

# 🔥 News
- *2025.04*: &nbsp;Thrilled to join UCSD as a CS Ph.D. student. Looking forward to starting this new journey!🌴🌊☀️
- *2025.02*: &nbsp;Our work on evaluating VLMs on photorealistic color illusion scenes has been accepted to CVPR 2025.
- *2024.09*: &nbsp;Our work on multi-perspective communication has been accepted by EMNLP main 2024.
- *2024.09*: &nbsp;Our work on multimodal instruction-tuning for biomedicine has been accepted to NeurIPS D&B 2024! Many thanks to Dr. Hejie Cui and Prof. Carl Yang for their guidance and support!
- *2024.06*: &nbsp;🎉🎉Our paper "Among Agents" is accepted at ACL Wordplay Workshop 2024. See you in Bangkok!
- *2024.01*: &nbsp;Thrilled to join the Berkeley NLP Group as an intern! Go bears!🐻🔥
- *2023.07*: &nbsp;Accepted into the University of Hong Kong's CS summer research internship. A wonderful summer with Prof. Chuan Wu and Dr. Junwei Su!
- *2022.02*: &nbsp;Join the MIT Media Lab's CSL@Shanghai.


# 📝 Publications 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/dove.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Images are Worth Variable Numbers of Tokens]()

**Lingjun Mao**, Rodolfo Corona, Xin Liang, Wenhao Yan, Zineng Tang

[**Project**]() | <strong>Arxiv 2025</strong>
- We propose DOVE, a dynamic vision encoder that produces a variable number of tokens to reconstruct each image.
- We extend DOVE with query-conditioned tokenization, which enables more efficient and targeted semantic extraction.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/paper6.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Evaluating Model Perception of Color Illusions in Photorealistic Scenes](https://arxiv.org/abs/2412.06184)

**Lingjun Mao**, Zineng Tang, Alane Suhr 

[**Project**](https://arxiv.org/abs/2412.06184) | <strong>CVPR 2025</strong>
- We propose an automated framework for generating realistic illusion images and creat a large, realistic dataset (RCID) of color illusion images.
- We investigate the underlying mechanisms of color illusions.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/paper1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Grounding Language in Multi-Perspective Referential Communication](https://arxiv.org/abs/2410.03959)

Zineng Tang, **Lingjun Mao**, Alane Suhr 

[**Project**](https://arxiv.org/abs/2410.03959) | <strong>EMNLP main 2024</strong>
- We introduce a task and dataset for referring expression generation and comprehension in multi-agent embodied environments.
</div>
</div>

<!--
[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div>
-->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/paper2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AMONGAGENTS: Evaluating Large Language Models in the Interactive Text-Based Social Deduction Game](https://arxiv.org/abs/2407.16521)

Yizhou Chi, **Lingjun Mao**, Zineng Tang

[**Project**](https://arxiv.org/abs/2407.16521) | <strong>ACL Wordplay Workshop 2024</strong>
- This paper focuses on creating proxies of human behavior in simulated environments, with “Among Us” utilized as a tool for studying simulated human behavior.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/paper3.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Biomedical Visual Instruction Tuning with Clinician Preference Alignment](https://biomed-vital.github.io/)

 Hejie Cui*, **Lingjun Mao\***, Xin Liang, Jieyu Zhang, Hui Ren, Quanzheng Li, Xiang Li, Carl Yang

[**Project**](https://biomed-vital.github.io/) | <strong>NeurIPS 2024</strong>
- we propose a data-centric framework (Biomed-VITAl) that incorporates clinician preferences into both stages of generating and selecting instruction data for tuning biomedical multimodal foundation models.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/paper4.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[BG-HGNN: Toward Scalable and Efficient Heterogeneous Graph Neural Network](https://arxiv.org/abs/2403.08207)

Junwei Su*, **Lingjun Mao\***, Chuan Wu

[**Project**](https://arxiv.org/abs/2403.08207) | <strong>ArXiv 2024</strong>
- We first highlights and demonstrates that the standard approach employed by existing HGNNs inevitably leads to parameter explosion and relation collapse.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/paper5.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AI Agent as Urban Planner: Steering Stakeholder Dynamics in Urban Planning via Consensus-based Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2310.16772) 

Kejiang Qian, **Lingjun Mao**, Xin Liang, Yimin Ding, Jin Gao, Xinran Wei, Ziyi Guo, Jiajie Li

[**Project**](https://arxiv.org/abs/2310.16772) | <strong>ArXiv 2024</strong>
- we introduce a Consensus-based Multi-Agent Reinforcement Learning framework for real-world land use readjustment.
</div>
</div>

# 📖 Educations
- *2024.01 - 2024.10*, Visiting Student (Berkeley Global Access Exchange Program) in University of California, Berkeley, USA
  - Supervised by [Prof. Alane Suhr](https://www.alanesuhr.com/)
- *2020-2025(expected)*, Software Engineering, Tongji University, Shanghai, China
  - Supervised by [Prof. Zhen Gao](https://sse.tongji.edu.cn/info/1206/3160.htm)

# 💻 Internships
- *Feb 2024 - Present*: Berkeley NLP Group, Berkeley Artificial Intelligence Research (BAIR) Lab
- *Nov 2023 - Jun 2024*: Department of Computer Science, Emory University
- *Apr 2023 - May 2024*: Department of Computer Science, University of Hong Kong
- *Apr 2022 - Nov 2023*: City Science Lab@Shanghai (MIT Media Lab)
- *Sept 2021 - Nov 2023*: Tongji ADE Lab
- *May 2021 - Apr 2023*: Tongji NaMI Lab

------

<p align="center">
  <i>2025@Lingjun Mao</i>
</p>
