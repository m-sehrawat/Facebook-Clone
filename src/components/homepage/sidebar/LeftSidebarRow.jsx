import React from "react";
import "./leftSidebarRow.css";

const LeftSidebarRow = ({ title, Icon }) => {
  return (
    <div className="sidebarRow">
      {Icon}
      <h4>{title}</h4>
    </div>
  );
};

export default LeftSidebarRow;
