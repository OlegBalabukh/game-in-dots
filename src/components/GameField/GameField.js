import React, {  useEffect } from 'react';
import './GameField.css';

const GameField = ({ gameStatus, setGreen, settingRed, cancelSettingRed }) => {

  const { activeSquare, gameField, delay, emptySquares } = gameStatus

  useEffect(() => {
    activeSquare.color === 'blue' && settingRed()    
  }, [activeSquare.color, gameField, settingRed])

  const onClickHandler = (id, color) => {    
    if (color === 'blue') {
      cancelSettingRed()
      setGreen({ id, gameField, delay, emptySquares })
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