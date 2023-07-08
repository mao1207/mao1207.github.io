import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { stateStore } from "../stores";
import ContentRouter from "./Router/ContentRouter.js";
import ContentMenu from "./Router/ContentMenu.js";

import "../App.css";

const DesktopVersion = () => {
  const { page, setPage } = stateStore;
  const navigate = useNavigate();

  //   console.log(page)

  const PageTitle = ({ text, id, isSection = false }) => {
    return (
      <div
        className={
          (isSection ? "sec_title" : "page_title") +
          " clickable not-select " +
          (id == page ? "active" : "")
        }
        onClick={() => {
          setPage(id);
          navigate(ContentMenu[id]["path"]);
        }}
      >
        {text}
      </div>
    );
  };

  return (
    <div className={"container"}>
      <div className={"menu"}>
        <div className={"menu_content"}>
          <div
            className={"section clickable_large"}
            onClick={() => {
              setPage(17);
              navigate(ContentMenu[17]["path"]);
            }}
          >
            <div className={"title"}>Lingjun Mao's Research</div>
            <div className={"sub_title"}>
              RESEARCH, PROJECTS, COLLABORATIONS
            </div>
          </div>
          {/* ---------- Divider ---------- */}

          <div className={"section"}>
            <div className={"sec_title"}>Network and Machine Intelligence (NaMI) Lab</div>
            <hr />
            <PageTitle text={ContentMenu[1]["title"]} id={1} />
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>NaMI Lab & CETC</div>
            <hr />
            <PageTitle text={ContentMenu[7]["title"]} id={7} />
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>Tongji ade Lab</div>
            <hr />
            <PageTitle text={ContentMenu[2]["title"]} id={2} />
            <PageTitle text={ContentMenu[3]["title"]} id={3} />
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>City Science Lab@Shanghai<br/>
              (MIT media lab)</div>
            <hr />
            <PageTitle text={ContentMenu[4]["title"]} id={4} />
            <PageTitle text={ContentMenu[5]["title"]} id={5} />
            <PageTitle text={ContentMenu[6]["title"]} id={6} />
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>University of Hong Kong</div>
            <hr />
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>Representative Products Developed</div>
            <hr />
            <PageTitle text={ContentMenu[12]["title"]} id={12} />
            <PageTitle text={ContentMenu[13]["title"]} id={13} />
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>Some Intereting Experiences</div>
            <hr />
            <PageTitle text={ContentMenu[10]["title"]} id={10} />
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <PageTitle text={"Projects"} id={17} />
            <PageTitle text={"About"} id={18} />
          </div>
        </div>
      </div>
      <div className={"content"} id="scroller">
        <ContentRouter />
      </div>
    </div>
  );
};

export default DesktopVersion;
