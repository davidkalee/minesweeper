import { useEffect, useState } from 'react';
import { addMines, createGrid, solveGrid } from './helpers';
import './App.css';
import Square from './square';


const App = () => {
  const mineCount = 5;
  const gridLen = 5;

  const [revealed, setRevealed] = useState(false);
  const [playerGrid, setPlayerGrid] = useState(createGrid(gridLen));
  const [answerGrid, setAnswerGrid] = useState(addMines(createGrid(gridLen)));

  const generateNewBoard = () => {
    setRevealed(false);

    const newAnswerGrid = addMines(createGrid(gridLen), mineCount);

    setAnswerGrid(newAnswerGrid);
    setPlayerGrid(createGrid(gridLen));
  };

  const revealBoard = () => {
    if (revealed) return;

    setRevealed(true);

    const solutionBoard = solveGrid(answerGrid, playerGrid);

    setPlayerGrid(solutionBoard);
  };

  const onSquareClick = (posX, posY) => {
    if (revealed) return;

    const copy = JSON.parse(JSON.stringify(playerGrid));

    if (copy[posX][posY]) {
      copy[posX][posY] = 0;
    } else {
      copy[posX][posY] = 1;
    }

    setPlayerGrid(copy);
  };

  // initializes on initial load
  useEffect(() => {
    generateNewBoard();
  }, []);

  return (
    <div className='screen'>
      <div>
        <div>
          {playerGrid.map((column, ii) => {
            return (
              <div key={`col-${ii}`}className="column">
              {
                column.map((squareVal, jj) => {
                  return (
                    <Square key={`square-${ii}x${jj}`} posX={ii} posY={jj} onClick={onSquareClick} squareVal={squareVal} />
                  )
                })
              }
              </div>
            )
          })}
        </div>
        <div className='button-holder'>
          <button onClick={generateNewBoard}> Create New Game </button>
          <button onClick={revealBoard}> Reveal Board </button>
        </div>
      </div>
    </div>
  );
}

export default App;
