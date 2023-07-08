import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={"/assets/boundary/1.png"}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>The boundary visualization is
        used to compare the boundary differences of DNN models of different
        architectures and explore the relationship between model accuracy and
        boundary geometry, e.g., to verify whether they match: the law of
        parsimony (Occam's Razor) parsimony law (Occam's Razor).</div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate title="Deep neural network decision boundary visualization" content={<Content />} />
  );
};

export default Page;
