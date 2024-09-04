export default function moveRight(inputBoard) {
  let board = [];
  let score = 0;

  inputBoard.forEach((row) => {
    let filteredRow = row.filter((i) => i !== 0).reverse();
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
      .slice(0, 4)
      .reverse();
    board.push(newRow);
  });

  return { board, score };
}
