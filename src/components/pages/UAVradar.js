import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={"/assets/UAVradar/1.png"}
        alt={""}
      />
    </div>

    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>Confidential for now.</div>

    <div className={"page_content_subtitle"}>Collaborators</div>
    <div className={"page_content_content"}>
      <a href="http://36.cetc.com.cn/">
        CETC 36
      </a>,{" "}
      <a href="https://scholar.google.com/citations?user=8xoKeR0AAAAJ">
        Qingjiang Shi
      </a>,{" "}
      <a href="https://see.tongji.edu.cn/info/1388/10482.htm">
        Zhongxiang Wei
      </a>, Kaiyu Huang, Lingjun Mao, Lunchen Xie
    </div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate
      title="Joint human-machine intelligent radar
      jamming strategy technology research"
      content={<Content />}
    />
  );
};

export default Page;
