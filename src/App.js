import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import RestartButton from "./components/RestartButton";
import Score from "./components/Score";
import "./App.css";

const App = () => {
  const [spaces, setSpaces] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("Tic Tac Toe");

  // Track score
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

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

  const checkDraw = (updatedSpaces) => {
    return updatedSpaces.every((spaces) => spaces !== null)
  }

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

        // Update score
        if (currentPlayer === "X") {
          setScoreX(scoreX + 2);
        } 
        else {
          setScoreO(scoreO + 2);
        }
      } 
      else if (checkDraw(newSpaces)) {
        setMessage("Its a draw!");
        setGameOver(true);
        setScoreO(scoreO + 1);
        setScoreX(scoreX + 1);
      }

      else {
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
      {/* Render the Score component */}
      <Score scoreX={scoreX} scoreO={scoreO} />
      <GameBoard spaces={spaces} onClick={handleClick} />
      <RestartButton onRestart={restartGame} />
    </div>
  );
};

export default App;
