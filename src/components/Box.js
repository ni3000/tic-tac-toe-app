import React from "react";
import "../App.css";

const Box = ({ value, onClick, index }) => {
  return (
    <div id={`box-${index}`} className="box" onClick={onClick}>
      {value}
    </div>
  );
};

export default Box;
