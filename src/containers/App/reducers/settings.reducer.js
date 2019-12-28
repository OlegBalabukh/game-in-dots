import { GET_SETTINGS } from '../constants'

export const settingsReducer = (state = {}, {type, payload}) => {
  switch(type) {
    case GET_SETTINGS:
      return payload;
    default:
      return state
  }
}