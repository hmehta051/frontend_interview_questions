import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const checkWinner = (squares) => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerLogic.length; i++) {
      const [a, b, c] = winnerLogic[i];
      if (squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
  };
  const handleClick = (i) => {
    const squares = [...board];
    if (checkWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setBoard(squares);
    setXIsNext(!xIsNext);
    if (checkWinner(squares)) {
      setTimeout(() => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
      }, 1000); // Reset after 1 second
    }
  };
  const winner = checkWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }
  const renderSquare = (i) => {
    return (
      <button
        className="border border-gray-600 w-[100px] h-[100px]"
        onClick={() => handleClick(i)}
      >
        {board[i]}
      </button>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center h-full w-full m-auto">
      <div className="text-3xl">Tic Tac Toe</div>
      <h2>{status}</h2>
      <div className="border-2 border-gray-800 w-[80%] h-full p-2 flex items-center justify-center">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="flex gap-1">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="flex gap-1">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
