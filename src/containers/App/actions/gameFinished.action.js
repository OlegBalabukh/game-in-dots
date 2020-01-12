import { GAME_FINISHED } from '../constants';

export const gameFinishedAction = (winner) => ({
   type: GAME_FINISHED, payload: winner
})