import React from 'react';

const PlayButton = ({ gameStart, gameRestart, gameStatus }) => { 

  const { fieldSize, playerName, message } = gameStatus;
  
  const handleClick = () => {
    message !== ""
      ? gameRestart(fieldSize)
      : gameStart();    
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