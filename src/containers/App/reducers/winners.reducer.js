import { GET_WINNERS, ADD_WINNER } from '../constants'

export const winnersReducer = (state = [], {type, payload}) => {
  switch(type) {

    case GET_WINNERS:
      return payload;

    case ADD_WINNER:
      return payload;

    default:
      return state
  }
}