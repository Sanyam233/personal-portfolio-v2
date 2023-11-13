import React from "react";

import ProjectDescription from "./ProjectDescription";

const WebsiteLayout = (props) => {
  return (
    <div className="website-layout-container">
      <div className="website-layout">
        <div
          className="frame-one"
          style={{ backgroundImage: `url(${props.desc.images.frame1})` }}
        >
          <div
            className="frame-two"
            style={{ backgroundImage: `url(${props.desc.images.frame2})` }}
          >
            <div
              className="frame-three"
              style={{ backgroundImage: `url(${props.desc.images.frame3})` }}
            ></div>
          </div>
        </div>
      </div>
      <ProjectDescription {...props.desc} />
    </div>
  );
};

export default WebsiteLayout;
