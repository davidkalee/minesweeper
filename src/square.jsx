import { useEffect, useState } from 'react';
import './square.css';

const colors = {
  0: 'clear', // !playerSelected regardless of hasMine
  1: 'purple', // playerSelected regardless of hasMine
  2: 'lightgreen', // noMine && !playerSelected
  3: 'pink', // hasMine && !playerSelected
  4: 'green', // noMine && playerSelected
  5: 'red' // hasMine && playerSelected
}

export const evalColor = (value) => {
  return colors[value];
}

export const Square = ({
  squareVal,
  posX,
  posY,
  onClick,
}) => {
  const [color, setColor] = useState('clear');

  useEffect(() => {
    setColor(evalColor(squareVal))
  }, [squareVal])

  return (
    <div onClick={() => onClick(posX, posY)} className={`square ${color}`} />
  );
}

export default Square;
