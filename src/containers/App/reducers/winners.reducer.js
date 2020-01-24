import { GET_WINNERS } from '../constants';

export const winnersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_WINNERS:
      return payload;
    default:
      return state;
  }
};
