import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = (props) => {
  return (
    <button
      className="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <FontAwesomeIcon className="button-icon" icon={props.icon} />
      <span>{props.caption}</span>
    </button>
  );
};

export default IconButton;
