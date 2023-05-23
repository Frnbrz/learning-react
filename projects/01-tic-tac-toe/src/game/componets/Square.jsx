function Square({ children, index, updateBoard, isSelected = false }) {
  const handleClick = () => {
    updateBoard(index);
  };

  const className = `square ${isSelected ? "is-selected" : ""}`;
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Square;
