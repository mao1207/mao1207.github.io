import React, { useState, useEffect } from "react";
import "../../App.css";
import styles from "./AboutPage.module.css";

import CopyrightSection from "../Copyright";

import { stateStore } from "../../stores";

const AwardsSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Awards</div>
      <ul className={"page_content_content"}>
        <li>2023 China CollegiateComputing Contest (CCCC) Shanghai First Prize</li>
        <li>2023 Shanghai Innovation and Entrepreneurship Project Award</li>
        <li>
          2023 ETH Beijing Hackathon finalist
        </li>
        <li>2022 National-level Innovation and Entrepreneurship Project Award</li>
        <li>2022 Second prize in the Gobang AI algorithm competition of Tongji University</li>
        <li>2022 Excellent backbone of Tongji University Student Union</li>
        <li>2022 Outstanding Students of Tongji University (5%)</li>
        <li>2022/2023 Third Prize of Asia Paciffc Cup Mathematical Modeling</li>
        <li>2022 Winner of "Crestron" Circular Economy Competition</li>
        <li>2021 Third Prize in Mathematical Modeling, Tongji University</li>
        <li>2021/2022 Tongji University Scholarship for Outstanding Undergraduate Students (5%)</li>
      </ul>
    </div>
  );
};

const DomainSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Interests and Domains</div>
      <ul className={"page_content_content"}>
        <li>
          Artificial Intelligence: Deep Learning; Reinforcement Learning; Generative Adversarial Networks;
          Graph Neural Networks
        </li>
        <li>
          Distributed Systems: Reduce communication overhead; Model Compression
        </li>
        <li>
          Web3: On-chain Governance; Decentralized Autonomous Organization(DAO);
          Decentralized App(DApp)
        </li>
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Technical Skills</div>
      <ul className={"page_content_content"}>
        <li>
          Data Analysis and Visualization: Python, C/C++, MATLAB, SQL,
          D3.js, SAS
        </li>
        <li>
          Full-stack Web Development: React, Vue, HTML, CSS, JavaScript,
          ASP.NET, Node.js
        </li>
        <li>
          Design and Modeling: Unity3D, AutoCAD, Figma, Adobe PS, Adobe After Effects, Axure
        </li>
        <li>
          Machine Learning: PyTorch, TensorFlow(TF 1.x, TF 2, TF.js),
          scikit-learn
        </li>
        <li>Simulation Modeling: GAMA Platform</li>
        <li>Database: MySQL, Redis</li>
        <li>Tools: Git, Docker, Postman, Linux</li>
        <li>
          Web3 and Blockchain: Polygon(Solidity), Solana(Rust), Hardhat, Remix
        </li>
      </ul>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Research Experience</div>
      <ul className={"page_content_content"}>
        <li>
          China Electronics Technology Group Corporation (CETC), Jun 2023 - present
        </li>
        <li> the Department of Computer Science at the University of Hong Kong, Apr 2023 - present</li>
        <li>
          City Science Lab@Shanghai(Tongji-MIT City Science Lab), Apr 2022 -
          Present
        </li>
        <li>
          Tongji ade Lab, Sept 2021 - present
        </li>
        <li>
          Tongji NaMI Lab, May 2021 - Apr 2023
        </li>
        <li>
          College of Automotive Engineering, Tongji University, Jan 2020 - Apr 2021
        </li>
      </ul>
    </div>
  );
};

const EmploymentSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Practical Experience</div>
      <ul className={"page_content_content"}>
        <li>
          China Collegiate Computing Contest (CCCC) Summer Camp, Jul 2023 - Aug 2023
        </li>
      </ul>
    </div>
  );
};

const PublicationSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>
        Publications and Working Papers
      </div>
      <ul className={"page_content_content"}>
      </ul>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Education</div>
      <ul className={"page_content_content"}>
        <li>
          2020-2025(expected), B.Eng, Software Engineering,
          Concentration in Machine Intelligence,{" "}
          <b>Tongji University</b>, Shanghai, China
        </li>
      </ul>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className={"page_container"}>
      <div className={"page_content_title"}>About</div>

      {/* ---------- Divider ---------- */}
      <div className={"row " + styles.about_container}>
        <div className={"col"}>
          <div className={"page_content_content"}>
            My name is Lingjun Mao (zh: 毛凌骏), and I also go by Marijn. I am
            currently a sophomore in the{" "}
            <a href="https://sse.tongji.edu.cn/">
              School of Software Engineering at Tongji University
            </a>. As a developer and researcher, my main research areas are generative
            adversarial networks, reinforcement learning and distributed systems technology.
            During my school years I have extensive research experience.
            I have interned as research assistant in NaMI lab at Tongji University,{" "}
            <a href="https://www.media.mit.edu/projects/city-science-lab-shanghai/overview/">
              MIT media lab's city science lab@Shanghai
            </a>,
            and{" "}
            <a href="https://www.cs.hku.hk/">
              the Department of Computer Science at the University of Hong Kong
            </a>.
            And I also have a technical cooperation project research experience with
            China Electronics Technology Group Corporation (CETC).
            <br />
            Student Activities: I am the president of Apple Club of Tongji University
            and the project team leader of Tongji University Student Union.
            <br />
            Some fun facts: I am a amateur badminton player
            and a member of Tongji University Debate Team.
            It is interesting to note that I am also a{" "}
            <a href="https://www.douyin.com/search/%E5%B0%8F%E6%AF%9B%E5%8F%AD%E5%8F%AD%E5%8F%AD?source=search_history&aid=4605065f-aa76-4c8e-8e6d-ae1b19406521&enter_from=discover">
              video blogger
            </a> to bring happiness.
          </div>
          <div className={"page_content_content"}>
            Email: <a href="mailto:mao1207@tongji.edu.cn">mao1207@tongji.edu.cn</a>
            <br />
            Github: <a href="https://github.com/mao1207">github.com/mao1207</a>
            <br />
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/marijnmao/">
              linkedin.com/in/marijnmao
            </a>
          </div>
          <div className={"page_content_content"}>
            Please feel free to send me an email if you are interested in
            collaborating or simply having a chat about science!
          </div>
        </div>
        <div className={styles.avatar_container} alt={""}>
          <img className={styles.avatar} src={`/avatar.jpg`} alt={""} />
        </div>
        {/*  */}
      </div>
      <div className={"row"}>
        <EducationSection />
      </div>
      <div className={"row"}>
        <DomainSection />
      </div>
      <div className={"row"}>
        <SkillsSection />
      </div>
      <div className={"row"}>
        <ExperienceSection />
      </div>
      <div className={"row"}>
        <EmploymentSection />
      </div>
      <div className={"row"}>
        <PublicationSection />
      </div>
      <div className={"row"}>
        <AwardsSection />
      </div>

      <CopyrightSection />
    </div>
  );
};

export default AboutPage;
