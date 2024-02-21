export const createGrid = (length) => {
  const columns = new Array(length);

  for (let ii = 0; ii < columns.length; ii++) {
    columns[ii] = new Array(length).fill(0);
  }

  return columns;
};

export const addMines = (grid, numMines) => {
  const copy = JSON.parse(JSON.stringify(grid));
  let mines = numMines;
  const numSquares = grid.length * grid.length;

  if (numSquares < mines) {
    return new Array(grid.length).fill(new Array(grid.length).fill(1));
  }

  while (mines > 0) {
    const posX = Math.floor(Math.random() * grid.length);
    const posY = Math.floor(Math.random() * grid.length);

    if (copy[posX][posY] === 0) {
      mines--;
      copy[posX][posY] = 1;
    }
  }

  return copy;
}

export const solveGrid = (answerGrid, playerGrid) => {
  const solution = createGrid(answerGrid.length);
  
  for (let ii = 0; ii < solution.length; ii++) {
    for (let jj = 0; jj < solution[ii].length; jj++) {
      const isPlayerSelected = playerGrid[ii][jj];
      const hasMine = answerGrid[ii][jj];

      if (isPlayerSelected && hasMine) {
        solution[ii][jj] = 5;
      } else if (isPlayerSelected && !hasMine) {
        solution[ii][jj] = 4;
      } else if (!isPlayerSelected && hasMine) {
        solution[ii][jj] = 3;
      } else {
        solution[ii][jj] = 2;
      }
    }
  }

  return solution;
}
