import {  
  SET_MODE_OPTIONS,
  SET_NAME,
  START_GAME,
  SET_GAME_FIELD
} from '../constants'

export const gameStatusReducer = (state = {
  play: false,
  name: "",
  field: null,
  delay: null,
  squares: {
    player: 0,
    computer: 0,
    winner: null
  },
  emptySquares: [],
  gameField: null
}, {type, payload}) => {
  switch(type) {

    case SET_MODE_OPTIONS:
      return {
        ...state,
        field: payload.field,
        delay: payload.delay
      };

    case SET_GAME_FIELD:
      return {
        ...state,
        gameField: payload
      };

    case SET_NAME:
      return {
        ...state,
        name: payload
      };

    case START_GAME:
      return {
        ...state,
        play: payload
      };

    default:
      return state
  }
}