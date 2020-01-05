import React, { useState } from 'react';

const PlayButton = ({ startGame, field, playerName }) => {
  const [btnName, setName] = useState("PLAY");

  const handleClick = () => startGame(true);

  return (
    <button
      type="button"
      className="btn btn-secondary"
      style={{width: "115px", padding: "10px"}}
      onClick={handleClick}
      disabled={!(field && playerName.length > 2)}
    > {btnName} </button>
  )
}

export default PlayButton;