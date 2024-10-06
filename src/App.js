import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [spaces, setSpaces] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("Tic Tac Toe");

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (updatedSpaces) => {
    for (const condition of winningCombos) {
      let [a, b, c] = condition;
      if (updatedSpaces[a] && updatedSpaces[a] === updatedSpaces[b] && updatedSpaces[a] === updatedSpaces[c]) {
        return [a, b, c];
      }
    }
    return false;
  };

  const handleClick = (index) => {
    if (!spaces[index] && !gameOver) {
      const newSpaces = [...spaces];
      newSpaces[index] = currentPlayer;

      const winner = checkWinner(newSpaces);
      if (winner) {
        setMessage(`${currentPlayer} has won!`);
        winner.forEach((i) => {
          document.getElementById(`box-${i}`).style.backgroundColor = "var(--winning-blocks)";
        });
        setGameOver(true);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }

      setSpaces(newSpaces);
    }
  };

  const restartGame = () => {
    setSpaces(Array(9).fill(null));
    setCurrentPlayer("X");
    setGameOver(false);
    setMessage("Tic Tac Toe");
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.style.backgroundColor = "#37505C";
    });
  };

  return (
    <div className="container">
      <h1>{message}</h1>
      <div id="gameboard">
        {spaces.map((value, index) => (
          <div
            key={index}
            id={`box-${index}`}
            className="box"
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
};

export default App;
