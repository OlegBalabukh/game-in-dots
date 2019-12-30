import React from 'react';
import './LeaderBoard.css';

const LeaderBoard = ({ winners }) => {
  return (
    <div>
      <h2>Leader Board</h2>
        { winners.map(({ id, winner, date}) =>
            <p key={id} id='winner'>
              { winner }
              <span id='date'>{ date }</span>
            </p>
          )
        }
    </div>
  )
}

export default LeaderBoard;