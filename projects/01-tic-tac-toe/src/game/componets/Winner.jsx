import Square from "./Square";

function Winner({ winner, resetGame }) {
  return (
    <section className="winner">
      <div className="text">
        <h2>{winner === "TIE" ? "Tie" : "Won"}</h2>
        <header className="win">
          {winner && winner !== "TIE" && <Square>{winner}</Square>}
        </header>

        <footer>
          <button onClick={resetGame}>Play Again</button>
        </footer>
      </div>
    </section>
  );
}

export default Winner;
