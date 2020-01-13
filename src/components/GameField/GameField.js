import React, {  useEffect } from 'react';
import './GameField.css';

const GameField = ({ gameStatus, setGreen, settingRed, cancelSettingRed }) => {

  const { activeSquare, emptySquares, playerName, fieldSize } = gameStatus
  const { gameField, delay, score } = gameStatus

  useEffect(() => {
    activeSquare.color === 'blue' && settingRed()
  }, [activeSquare.color, gameField, settingRed])

  const onClickHandler = (id, color) => {
    if (color === 'blue') {
      cancelSettingRed()
      setGreen({ id, gameField, delay, emptySquares, score, playerName })
    }
  }

  return (
    <div id="field">
      {
        gameField &&
        gameField.map((row, i) =>
        <div className="row" key={i}>
          {
            row.map(square =>
            <div
              className={`square squareSize-${fieldSize}`}
              key={square.id}
              id={square.color}
              onClick={() => onClickHandler(square.id, square.color)}
            >
            </div>)
          }
        </div>)
      }
    </div>
  )
}

export default GameField;