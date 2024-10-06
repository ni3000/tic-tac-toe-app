import React from "react";
import "../App.css";

const Score = ({ scoreX, scoreO }) => {
  return (
    <div className="score-board">
      <div className="score">
        <span>Player X: {scoreX}</span>
      </div>
      <div className="score">
        <span>Player O: {scoreO}</span>
      </div>
    </div>
  );
};

export default Score;
