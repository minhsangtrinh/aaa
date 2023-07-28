import React from "react";
import "./cssStyle.css";

function StyleSheets(props) {
  let className = props.primary ? "style" : "";
  return (
    <div>
      <h1 className={`${className} font-size`}>Style Sheets</h1>
    </div>
  );
}

export default StyleSheets;
