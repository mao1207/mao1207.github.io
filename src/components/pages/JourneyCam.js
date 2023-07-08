import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/JourneyCam/1.png"} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Introduction and Demo</div>
    <div className={"page_content_content"}>
      JourneyCam is a VR-assisted photography teaching app whose core function
        is to provide tutorials on professional photography with cell phones.
        With the help of VR game scenarios, we allow beginners to master the
        basics and techniques of photography in a relaxed and fun environment.
        In our APP, users can carry out the consolidation of theoretical knowledge
        of lens language and special training of core knowledge. Further,
        based on their understanding of lens language, users can use their
        imagination and creativity to freely control the camera to shoot in
        this virtual environment and complete various validation or creative
        experiments related to lens language.
    </div>

    <div className={"page_content_subtitle"}>Technology Line</div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/JourneyCam/2.png"} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/JourneyCam/3.png"} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/JourneyCam/4.png"} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Collaborators</div>
    <div className={"page_content_content"}>
      Team: Lingjun Mao, Xin Liang, ManXin Xu
    </div>
  </>
);

const Page = () => {
  return <ContentTemplate title="JourneyCam: VR-assisted photography teaching APP" content={<Content />} />;
};

export default Page;
