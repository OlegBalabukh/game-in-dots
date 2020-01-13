import {  
  SET_MODE,
  SET_GAME_FIELD,
  SET_NAME,
  GAME_STARTED,
  GAME_FINISHED,
  GAME_RESTARTED,
  STOP_GAME,
  SETTING_BLUE_COMPLETED,
  SETTING_RED_COMPLETED,
  SET_GREEN
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

    case SET_MODE:
      return {
        ...state,
        play: false,
        fieldSize: payload.field,
        delay: payload.delay,
        message: ""
      };

    case SET_GAME_FIELD:
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
        play: true,
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

    case SETTING_BLUE_COMPLETED:
      return {
        ...state,
        gameField: payload.gameField,
        emptySquares: payload.emptySquares,
        activeSquare: payload.activeSquare
      };

    case SETTING_RED_COMPLETED:
      return {
        ...state,
        gameField: payload.gameField,
        score: payload.score,
        activeSquare: { ...state.activeSquare, color: 'red' }
      };

    case SET_GREEN:
      return {
        ...state,
        gameField: payload.gameField,
        score: payload.score,
        activeSquare: { ...state.activeSquare, color: 'green' }
      };

    default:
      return state
  }
}