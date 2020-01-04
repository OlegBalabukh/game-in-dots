import {  } from '../constants'

export const gameStatusReducer = (state = {
  play: false,
  name: "",
  squares: {
    player: 0,
    computer: 0,
    winner: null
  },
  emptySquares: [],
  gameField: []
}, {type, payload}) => {
  switch(type) {
        
    default:
      return state
  }
}