import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/FactLENS/1.png"} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Website Link</div>
    <div className={"page_content_content"}>
        Github:{" "}
      <a href="https://github.com/Tongji-Blockchain-Association/eth-beijing-hackathon-2023">
        https://github.com/Tongji-Blockchain-Association/eth-beijing-hackathon-2023
      </a>
      <br />
      Slide Link:{" "}
      <a href="https://docs.google.com/presentation/d/1yf71O0O2Vv7JJTbE85SyTkCaA3YaeqE64XO0Vl77-IY/edit#slide=id.g22bbb470d9f_1_419">
        https://docs.google.com/presentation/d/
      1yf71O0O2Vv7JJTbE85SyTkCaA3YaeqE64XO0Vl77-IY/edit#slide=id.g22bbb470d9f_1_419
      </a>
    </div>
    <div className={"page_content_subtitle"}>Collaborators</div>
    <div className={"page_content_content"}>
      <a href="https://github.com/Tongji-Blockchain-Association">
      Tongji Blockchain Association
      </a>
      {" "}(TJUBA): Lingjun Mao, Xin Liang, Chance Jiajie Li, Nina Wang, Yongqi Li,
    </div>

    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      With the development of the Internet and social media,
        news is spreading at an unprecedented speed and scale.
        In such a context, fake news spreads rapidly, even its
        spread on social media exceeds the speed of real news,
        so how to solve the negative impact of fake news becomes
        an inevitable topic.
        <br/>
        FactLENS is a decentralized news validation
        ecosystem, which consists of FactLENS plugin
        and FactLENS website. Unlike some other decentralized
        news censorship projects (fact protocol), we focus more on making
        FactLENS accessible to most readers while using centralized
        social media, rather than forcing readers to join a whole new
        web3 platform (e.g. Block Quest for Fact protocol).
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/FactLENS/2.png"} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Hackathon Live</div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/FactLENS/3.png"} alt={""} />
    </div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate
      title="FactLENS DAO -A Decentralized News Validation Ecosystem"
      content={<Content />}
    />
  );
};

export default Page;
