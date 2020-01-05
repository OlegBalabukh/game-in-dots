import React from 'react';
import './GameField.css';

const GameField = ({ field }) => {
  return (
    <>
      <div>Game Field</div>
      <div id="field">
        {
          field &&
          field.map((row, i) => 
          <div className="row" key={i}>
            {
              row.map(square =>
              <div className="square" key={square.id} id={square.color}></div>)
            }
          </div>)
        }
      </div>
    </>
  )
}

export default GameField;