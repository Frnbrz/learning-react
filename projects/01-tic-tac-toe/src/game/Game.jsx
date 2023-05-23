import Square from "./componets/Square"
import { useState } from "react"
import Winner from "./componets/Winner"
import confetti from "canvas-confetti"

const TURNS = {
  X: "X",
  O: "O",
}

function Game () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (newBoard) => {
    const winningCombos = [
      [0, 1, 2], // 1st row
      [3, 4, 5], // 2nd row
      [6, 7, 8], // 3rd row
      [0, 3, 6], // 1st column
      [1, 4, 7], // 2nd column
      [2, 5, 8], // 3rd column
      [0, 4, 8], // 1st diagonal
      [2, 4, 6], // 2nd diagonal
    ]

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i]
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(newBoard[a])
      }
    }
  }

  const updateBoard = (index) => {
    if (board[index] || winner) {
      return
    }
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else {
      const isBoardFull = newBoard.every((square) => square !== null)
      if (isBoardFull) {
        setWinner("TIE")
      }
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <>
      <main className="board">
        <h1>Tic tac toe</h1>
        <header>
          <button type="button" onClick={resetGame}>
            Reset Game
          </button>
        </header>
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
        {winner && <Winner winner={winner} resetGame={resetGame} />}
      </main>
    </>
  )
}

export default Game
