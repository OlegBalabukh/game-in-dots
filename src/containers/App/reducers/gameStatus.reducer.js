import {  
  SET_MODE_OPTIONS,
  SET_NAME,
  GAME_STARTED,
  GAME_FINISHED,
  GAME_RESTARTED,
  STOP_GAME,
  SET_BLUE,
  SETTING_RED_COMPLETED,
  SET_GREEN,
  SET_GAME_FIELD_OPTIONS
} from '../constants'

const initialState = {
  play: false,
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
}

export const gameStatusReducer = (state = initialState, {type, payload}) => {
  switch(type) {

    case SET_MODE_OPTIONS:
      return {
        ...state,
        play: false,
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

      case GAME_STARTED:
      return {
        ...state,
        play: true
      };

      case GAME_RESTARTED:
      return {
        ...state,
        message: ""
      };

    case STOP_GAME:
    return {
      ...initialState,
      playerName: state.playerName
    };

    case GAME_FINISHED:
    return {
      ...state,
      play: false,
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