import React from "react";
import ProjectDescription from "./ProjectDescription";

const MobileLayout = (props) => {
  return (
    <div className="mobile-layout-container">
      <div className="mobile-layout">
        <div
          className="frame-one"
          style={{ backgroundImage: `url(${props.desc.images.frame1})` }}
        >
          <div
            className="frame-two"
            style={{ backgroundImage: `url(${props.desc.images.frame2})` }}
          >
            <div
              className="frame-two"
              style={{ backgroundImage: `url(${props.desc.images.frame3})` }}
            >
              <div
                className="frame-two"
                style={{ backgroundImage: `url(${props.desc.images.frame4})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <ProjectDescription {...props.desc} />
    </div>
  );
};

export default MobileLayout;
