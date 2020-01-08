import React, { useState, useEffect } from 'react';
import './GameField.css';

const GameField = ({ gameStatus, setGreen, setBlue, setRed }) => {

  const { activeSquare, gameField, delay, emptySquares } = gameStatus

  const sleep = ms => {
    return new Promise(resolve => {
      setTimeout(() => resolve(), ms)
    })
  }

  const id = activeSquare.id;
  console.log(activeSquare.color)

  useEffect(() => {
    if (id && activeSquare.color === 'blue') {      
      sleep(delay)
        .then(() => {
          if (activeSquare.color === 'blue') {
            setRed({ id, gameField })
          }
          })
    }

  }, [id, activeSquare.color, delay, gameField, setRed])


  const onClickHandler = (id, color) => {
    if (color === 'blue') {      
      setGreen({ id, gameField })
    }
  }

  return (
    <>
      <div>Game Field</div>
      <div id="field">
        {
          gameField &&
          gameField.map((row, i) => 
          <div className="row" key={i}>
            {
              row.map(square =>
              <div 
                className="square"
                key={square.id}
                id={square.color}
                onClick={() => onClickHandler(square.id, square.color)}
              >
                
              </div>)
            }
          </div>)
        }
      </div>
    </>
  )
}

export default GameField;