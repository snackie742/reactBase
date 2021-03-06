import { DAILY_GAME_ACTIONS } from './dailyGames.actions';

export const initialState = {
  loading: false,
};

export default function reducer(state = initialState, action) {
  const { type, data, errorMessage } = action;
  switch(type) {
    case DAILY_GAME_ACTIONS.FETCH_DAILY_GAMES:
      return {
        ...state,
        loading: true,
      };
    case DAILY_GAME_ACTIONS.FETCH_DAILY_GAMES_SUCCESS:
      return {
        ...state,
        ...data,
        loading: false,
      };
    case DAILY_GAME_ACTIONS.FETCH_DAILY_GAMES_FAILURE:
      return {
        ...state,
        errorMessage,
        loading: false,
      };
    default:
      return state;
  }
}