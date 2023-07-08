import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/life/1.jpg`}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Change my major</div>
    <div className={"page_content_content"}>
      I graduated from Jiangxi Normal University High School and enrolled in Tongji University in 2020.
        At that time, my major was automotive engineering, but I gradually found that I still prefer
        computer-related technology, so in the second semester of my freshman year I changed my major
        and enrolled in the School of Software Engineering. At that time, I learned python, C/C++ and
        other languages for the interview of switching majors, and developed some small games on my own,
        although it looks a little rudimentary now, but I poured my heart and soul into it at that time.
      <br />
        <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
          <img
            className={"img_aspect"}
            src={`/assets/life/2.png`}
            alt={""}
          />
        </div>
    </div>


    <div className={"page_content_subtitle"}>Extracurricular activities (I'm also a video blogger)</div>
    <div className={"page_content_content"}>
        My freshman year was arguably the easiest year for me, so I joined many clubs and student organizations
        in my free time, and became the head of the student government department, helping to organize lectures
        and other activities for the university. Out of my love for debating, I also joined the debate team of
        Tongji University and represented the university in many tournaments, big and small. At that time in the
        hobby, I also opened a social media account, will often update some interesting segments, I did not
        expect some videos are very popular, the most a video has 660,000 plays.
        <br/>
        <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
          <img
            className={"img_aspect"}
            src={`/assets/life/3.png`}
            alt={""}
          />
        </div>
    </div>

    <div className={"page_content_subtitle"}>Study hard (Which seems not very interesting)</div>
    <div className={"page_content_content"}>
      I studied hard during my time in school, which doesn't seem like a lot of fun but I'll
        make a note of it anyway hahaha. I have had multiple consecutive semesters with perfect
        grades and I currently have a 93.1/100 GPA, which is in the top 5% of my major.
        It's not an easy thing to do and I've put a lot of time into it.
        <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
          <img
            className={"img_aspect"}
            src={`/assets/life/4.png`}
            alt={""}
          />
        </div>
    </div>
    <div className={"page_content_subtitle"}>Networking with industry companies</div>
    <div className={"page_content_content"}>
      As the president of Apple Club in Tongji University, I often communicate
        with many companies, including Apple, Microsoft Research Asia, Lilith Games, etc.
        Sometimes we will discuss together to hold activities, such as msra
        offline visit and exchange. We also regularly invite industry experts to
        give lectures to students on campus to guide their career development.
        Interestingly, I am also the president of Tongji University Blockchain
        Association, and will cooperate with some web3 industries, like
        organizing 2023 eth Hackathon Shanghai.
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/life/5.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Research Internship</div>
    <div className={"page_content_content"}>
      The work that I was most interested in during my university years was the research internship.
        In my sophomore year, I joined Tongji NaMI Lab on the recommendation of Rui Zeng at
        the University of Manchester to study Distributed Machine Learning, and was formally
        introduced to research under the leadership of Kaiyu Huang. After that, I also worked
        with many teachers in Tongji Software School, among which I was most impressed by Ms. Zhen Gao,
        because she is very cheerful and patient, and I had a lot of fun working in her Tongji ade Lab.
After that, I slowly sought internship opportunities outside of school and continued to refine
        myself. I joined the City Science Lab under the MIT media Lab and worked on a number of
        projects at the intersection of computing and urban governance under the leadership of Dr. Ryan
        Zhan. I also spent some time at the University of Hong Kong, where I did some work on graph
        neural networks in collaboration with Prof. Chuan Wu of the Department of Computer Science.
        On the recommendation of Prof. Qingjiang Shi, I have collaborated with the 36th Research
        Institute of China Electronics Technology Group Corporation on some major national military projects.

    </div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate title="Interesting moments in my college life" content={<Content />} />
  );
};

export default Page;
