import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={"/assets/marldao/1.png"}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
  </>
);

const Page = () => {
  return <ContentTemplate title="Multi-Agent Reinforcement Learning in DAO Governance" content={<Content />} />;
};

export default Page;
