import {  
  SET_MODE_OPTIONS,
  SET_NAME,
  START_GAME,
  STOP_GAME,
  SET_BLUE,
  SETTING_RED_COMPLETED,
  SET_GREEN,
  SET_GAME_FIELD_OPTIONS
} from '../constants'

export const gameStatusReducer = (state = {
  playerName: "",
  fieldSize: null,
  delay: null,
  score: null,
  message: "",
  activeSquare: {
    id: null,
    color: ""
  },
  emptySquares: [],
  gameField: null
}, {type, payload}) => {
  switch(type) {

    case SET_MODE_OPTIONS:
      return {
        ...state,
        fieldSize: payload.field,
        delay: payload.delay
      };

    case SET_GAME_FIELD_OPTIONS:
      return {
        ...state,
        gameField: payload.gameField,
        emptySquares: payload.emptySquares,
        score: payload.score
      };

    case SET_NAME:
      return {
        ...state,
        playerName: payload
      };

    case START_GAME:
      return {
        ...state,
        message: ""
      };

    case STOP_GAME:
    return {
      ...state,
      message: `${payload} won!`
    };

    case SET_BLUE:
      return {
        ...state,
        gameField: payload.gameField,
        emptySquares: payload.emptySquares,
        activeSquare: payload.activeSquare
      };

    case SETTING_RED_COMPLETED:
      return {
        ...state,
        gameField: payload,
        activeSquare: { ...state.activeSquare, color: 'red' }
      };

    case SET_GREEN:
      return {
        ...state,
        gameField: payload,
        activeSquare: { ...state.activeSquare, color: 'green' }
      };

    default:
      return state
  }
}