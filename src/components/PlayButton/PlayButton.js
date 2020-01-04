import React, { useState } from 'react';

const PlayButton = ({ startGame }) => {
  const [name, setName] = useState("PLAY");

  const handleClick = () => startGame(true);

  return (
    <button
      type="button"
      className="btn btn-secondary"
      style={{width: "115px", padding: "10px"}}
      onClick={handleClick}
    > {name} </button>
  )
}

export default PlayButton;