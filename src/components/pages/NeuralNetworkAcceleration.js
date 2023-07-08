import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/networkacc/1.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Website Link</div>
    <div className={"page_content_content"}>
      Github Link (Fast Matrix Multiplication):{" "}
      <a href="https://github.com/mao1207/neural-network-computation-acceleration">
        https://github.com/mao1207/neural-network-computation-acceleration
      </a>
      <br />
      Github Link (Underlying operator optimization):{" "}
      <a href="https://github.com/mao1207/Optimization-of-the-underlying-operator-for-fast-matrix-multiplication">
        https://github.com/mao1207/Optimization-of-the-underlying-operator
          -for-fast-matrix-multiplication
      </a>
      <br />
    </div>
    <div className={"page_content_subtitle"}>Collaborators</div>
    <div className={"page_content_content"}>
      <a href="https://scholar.google.com/citations?user=8xoKeR0AAAAJ">
        Qingjiang Shi
      </a>, Rui Xiao, Kaiyu Huang, Lingjun Mao
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
        The vector quantization algorithm <b>Bolt</b> can greatly reduce the time to encode vectors.
        In vector multiplication calculation, assuming two vectors one is a query vector
        and the other is a set of database vectors, the database vectors can be encoded
        by quantizing them, putting each database vector in 16 hash buckets,
        and replacing the original vector with the center of mass of the hash bucket.
        In this way, we can get the multiplication result of the query vector and the prime
        in advance and store it in a table, thus converting the vector multiplication in
        the inference process into a <b>table lookup operation</b> and greatly reducing the time
        of vector multiplication.
      <br />
        Therefore, according to Bolt's idea, we can consider each row of the matrix as
        a vector and different columns as different eigenvalues, and then reduce
        the time overhead of matrix multiplication by encoding quantization.
        At the same time, this approach compresses the complex data into an
         <b> 8-bit encoded set</b>, which greatly reduces the overhead of nodes communicating
        with each other in the distributed system. Considering that matrix multiplication
        is most commonly used in neural networks, and that the feature vectors with
        a high degree of abstraction are inherently similar, the idea of accelerating
        neural networks by quantization coding is feasible.
      <br />
    So in this project <b>we replaced the last fully connected layer of the
        traditional neural network with coded quantized matrix multiplication </b>
        and compared it with the speed and accuracy of the traditional neural network.
        The results show that our meta-representation-based neural network acceleration
        method can improve the inference speed by 10 times while guaranteeing the
        accuracy of the neural network.
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
    </div>
    <div className={"page_content_subtitle"}>Hash function for meta representation</div>
    <div className={"page_content_content"}>
    We quantize the output of the neural network before the fully connected layer,
        replace the original data with the prime encoding of the hash bucket,
        and obtain the result of multiplying the prime with the coefficient matrix
        of the next layer in advance. This makes it possible to use the results in
        the preprocessing table instead of the multiplication operation for the actual
        inference. And all the data in the lookup table are stored in 8 bits.
    </div>
    <div className={"page_content_subtitle"}>Fast 8-bit addition</div>
    <div className={"page_content_content"}>
      To further speed up our algorithm and give it an advantage over even frameworks
        such as tensorflow that have already been bottom speeded out, we optimize our
        algorithm with SIMD's parallel addition instructions. Considering that C arithmetic
        operations are faster than python,
        the fast 8-bit addition we implement in C and link it to python. The experiments proved
        to be feasible.
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/networkacc/2.png`}
        alt={""}
      />
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/networkacc/3.png`}
        alt={""}
      />
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/networkacc/4.png`}
        alt={""}
      />
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/networkacc/5.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Parallel Mixing Search</div>
    <div className={"page_content_content"}>
      In the process of traversing the hash bucket, we traverse a four-level
        binary tree because the number of buckets is 16. In the inference process,
        we need to convert the encoding like 0100 back to the leaf node number 4,
        which can be optimized here with SIMD's parallel mix-and-clean lookup instruction.
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/networkacc/6.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Outlook</div>
    <div className={"page_content_content"}>
      Our neural network acceleration algorithm greatly improves
        the speed of neural network inference and reduces the communication
        overhead between nodes of the distributed system. Subsequent
        applications are planned for scenarios such as UAV swarms to
        improve system performance.
    </div>
  </>
);

const Page = () => {
  return <ContentTemplate title="A distributed neural network
  computation acceleration method based on meta-representation" content={<Content />} />;
};

export default Page;
