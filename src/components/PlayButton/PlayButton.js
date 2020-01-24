import React from 'react';

const PlayButton = ({ gameStart, gameRestart, gameStatus }) => {
  const { fieldSize, playerName, message, play } = gameStatus;

  const handleClick = () => {
    message !== '' ? gameRestart(fieldSize) : gameStart();
  };

  const isDisabled = () => {
    if (play) return true;
    if (fieldSize && playerName.length) return false;
    return true;
  };

  return (
    <button
      type='button'
      className='btn btn-secondary'
      style={{ width: '115px', padding: '10px' }}
      onClick={handleClick}
      disabled={isDisabled()}
    >
      {' '}
      {!message ? 'PLAY' : 'PLAY AGAIN'}{' '}
    </button>
  );
};

export default PlayButton;
