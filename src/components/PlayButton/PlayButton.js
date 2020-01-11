import React from 'react';

const PlayButton = ({ startGame, gameStatus, restartGame }) => {
  

  const { fieldSize, playerName, message } = gameStatus;
  const { delay, gameField, emptySquares, activeSquare, score } = gameStatus;
  
  const startOptions = {
    delay,
    score,
    gameField,
    emptySquares,
    activeSquare  
  }

  const restartOptions = {
    delay,
    fieldSize
  }

  const handleClick = () => {
    message !== ""
      ? restartGame(restartOptions)
      : startGame(startOptions);
    
  }

  return (
    <button
      type="button"
      className="btn btn-secondary"
      style={{width: "115px", padding: "10px"}}
      onClick={handleClick}
      disabled={!(fieldSize && playerName.length > 2)}
    > {!message ? "PLAY" : "PLAY AGAIN"} </button>
  )
}

export default PlayButton;