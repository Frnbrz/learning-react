function Board({ board = []}) {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="cell">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default Board