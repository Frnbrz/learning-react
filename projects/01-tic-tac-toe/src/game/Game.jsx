import Square from "./componets/Square";
import { useState } from "react";

const TURNS = {
  X: "X",
  O: "O",
};

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] !== null) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  return (
    <>
      <main className="board">
        <h1>Tic tac toe</h1>
        <section className="game">
          {board.map((square, index) => (
            <Square updateBoard={updateBoard} key={index} index={index}>
              {square}
            </Square>
          ))}
        </section>
        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
      </main>
    </>
  );
}
export default Game;
