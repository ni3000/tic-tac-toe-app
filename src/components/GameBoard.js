import React from "react";
import Box from "./Box";
import "../App.css";

const GameBoard = ({ spaces, onClick }) => {
  return (
    <div id="gameboard">
      {spaces.map((value, index) => (
        <Box key={index} value={value} onClick={() => onClick(index)} index={index} />
      ))}
    </div>
  );
};

export default GameBoard;
