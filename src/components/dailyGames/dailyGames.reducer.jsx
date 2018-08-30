import { DAILY_GAME_ACTIONS } from './dailyGames.actions';

export const initialState = {
  loading: false,
};

export default function reducer(state = initialState, action) {
  const { type, data } = action;
  console.log('reducer', action);
  switch(type) {
    case DAILY_GAME_ACTIONS.FETCH_DAILY_GAMES:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}