import React, { useState } from 'react';

const PlayButton = () => {
  const [name, setName] = useState("PLAY");

  const handleClick = () => setName("PLAY AGAIN");

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