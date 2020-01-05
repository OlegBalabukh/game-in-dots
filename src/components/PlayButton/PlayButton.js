import React, { useState } from 'react';

const PlayButton = ({ startGame, gameStatus }) => {
  const [btnName, setName] = useState("PLAY");

  const { field, name } = gameStatus;
  const { delay, gameField, emptySquares } = gameStatus;
  
  const startOptions = {
    play: true,
    options: {
      delay,
      gameField,
      emptySquares
    }
  }

  const handleClick = () => startGame(startOptions);

  return (
    <button
      type="button"
      className="btn btn-secondary"
      style={{width: "115px", padding: "10px"}}
      onClick={handleClick}
      disabled={!(field && name.length > 2)}
    > {btnName} </button>
  )
}

export default PlayButton;