import React from "react";

const style = {
  color: "red",
  fontSize: "89px",
};

function Inline() {
  return (
    <div>
      <h1 className={style.success}>Success</h1>
      <h1 className="error">Error</h1>
      <h1 className="style">In line</h1>
    </div>
  );
}

export default Inline;
