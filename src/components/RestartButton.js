import React from "react";
import "../App.css";

const RestartButton = ({ onRestart }) => {
  return (
    <button onClick={onRestart}>Restart Game</button>
  );
};

export default RestartButton;
