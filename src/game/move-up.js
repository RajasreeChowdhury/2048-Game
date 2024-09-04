export default function moveUp(inputBoard) {
  let board = [];
  let score = 0;

  function transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
  }

  let transposedBoard = transpose(inputBoard);

  transposedBoard.forEach((row) => {
    let filteredRow = row.filter((i) => i !== 0);
    for (let i = 0; i < filteredRow.length - 1; i++) {
      if (filteredRow[i] === filteredRow[i + 1]) {
        filteredRow[i] *= 2;
        filteredRow[i + 1] = 0;
        score += filteredRow[i];
      }
    }
    let newRow = filteredRow
      .filter((i) => i !== 0)
      .concat(Array(4).fill(0))
      .slice(0, 4);
    board.push(newRow);
  });

  board = transpose(board);
  return { board, score };
}
