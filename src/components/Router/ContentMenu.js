import React from "react";

import GalleryView from "../pages/GalleryView.js";

import NeuralNetworkComputationAcceleration from "../pages/NeuralNetworkAcceleration.js";
import MCTS from "../pages/life.js";
import Boundary from "../pages/boundary";
import EquityWithoutZoning from "../pages/EquityWithoutZoning.js";

import CLGAN from "../pages/CLGAN.js";
import UAVradar from "../pages/UAVradar.js";
import MARLDAO from "../pages/MARLDAO.js";
import CrowdCounting from "../pages/CrowdCounting.js";
import EventCamera from "../pages/EventCamera.js";

import CommunityDao from "../pages/CommunityDao.js"
import GreenCommute from "../pages/GreenCommute.js"

import Olika from "../pages/JourneyCam.js"
import ElderDesign from "../pages/FactLENS.js"
import Sandtray from "../pages/Sandtray.js"

import TEDAnother from "../pages/TEDAnother.js"
import TEDReturn from "../pages/TEDReturn.js"

import AboutPage from "../pages/AboutPage.js";
import Life from "../pages/life.js";

const ContentMenu = {
  0: {
    path: "/",
    element: <AboutPage />,
    title: "",
    thumbnail: "",
    displayInGallery: false,
  },
  1: {
    path: "/NeuralNetworkComputationAcceleration",
    element: <NeuralNetworkComputationAcceleration />,
    title: "Neural Network Computation Acceleration",
    thumbnail: "/assets/networkacc/1.png",
    displayInGallery: true,
  },
  2: {
    path: "/CLGAN",
    element: <CLGAN />,
    title: "Critic Leading GAN",
    thumbnail: "/assets/CLGAN/1.png",
    displayInGallery: true,
  },
  3: {
    path: "/DecisionBoundaryVisualization",
    element: <Boundary />,
    title: "Decision Boundary Visualization",
    thumbnail: "/assets/boundary/2.png",
    displayInGallery: true,
  },
  4: {
    path: "/CommunityDao",
    element: <CommunityDao />,
    title: "Community DAO",
    thumbnail: "/assets/communitydao/13.png",
    displayInGallery: true,
  },
  5: {
    path: "/GreenCommute",
    element: <GreenCommute />,
    title: "SoCity DAO - Green Commute",
    thumbnail: "/assets/greencommute/1.png",
    displayInGallery: true,
  },
  6: {
    path: "/MARLDAO",
    element: <MARLDAO />,
    title: "MARL for DAO",
    thumbnail: "/assets/marldao/1.png",
    displayInGallery: true,
  },
  7: {
    path: "/UAVradar",
    element: <UAVradar />,
    title: "Drone swarm radar jamming",
    thumbnail: "/assets/UAVradar/1.png",
    displayInGallery: true,
  },
  10: {
    path: "/life",
    element: <Life />,
    title: "College life record",
    thumbnail: "/assets/life/1.jpg",
    displayInGallery: true,
  },
  12: {
    path: "/JourneyCam",
    element: <Olika />,
    title: "JourneyCam",
    thumbnail: "/assets/JourneyCam/1.png",
    displayInGallery: true,
  },
  13: {
    path: "/FactLENSDAO",
    element: <ElderDesign />,
    title: "FactLENS DAO",
    thumbnail: "/assets/FactLENS/2.png",
    displayInGallery: true,
  },
  17: {
    path: "/gallery",
    element: <GalleryView />,
    title: "Projects",
    thumbnail: "",
    displayInGallery: false,
  },
  18: {
    path: "/about",
    element: <AboutPage />,
    title: "About",
    thumbnail: "",
    displayInGallery: false,
  },
};

export default ContentMenu;
