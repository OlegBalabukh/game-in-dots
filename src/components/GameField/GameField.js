import React from 'react';
import './GameField.css';

const GameField = ({settings}) => {

  function makeField (n) {
    const fields = [];
    for (let i = 0; i < n; i++) {
      fields.push(i)
    }
    return fields;
  }

  return (
    <>
      <div>Game Field</div>
      <div id="field">
        {
          makeField(5).map(row => 
          <div className="row" key={row}>
            {
              makeField(5).map(square =>
              <div className="square" key={square}></div>)
            }
          </div>)
        }
      </div>
    </>
  )
}

export default GameField;