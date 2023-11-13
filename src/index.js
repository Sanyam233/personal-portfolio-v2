import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faExternalLinkAlt,
  faCloudDownloadAlt,
  faProjectDiagram,
  faMedal,
  faArrowCircleDown,
  faPaperPlane,
  faTimes,
  faAngleDoubleRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App";
import "./styles/index.scss";
import { createRoot } from "react-dom/client";

library.add(
  faBars,
  faExternalLinkAlt,
  faCloudDownloadAlt,
  faProjectDiagram,
  faMedal,
  faArrowCircleDown,
  faTimes,
  faPaperPlane,
  faAngleDoubleRight,
  faCircle
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
