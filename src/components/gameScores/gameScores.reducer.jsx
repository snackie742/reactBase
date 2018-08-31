import { GAME_SCORES_ACTIONS } from './gameScores.actions';

export const initialState = {
  loading: false,
};

export default function reducer(state = initialState, action) {
  const { type, data, errorMessage } = action;
  switch(type) {
    case GAME_SCORES_ACTIONS.FETCH_GAME_SCORES:
      return {
        ...state,
        loading: true,
      };
    case GAME_SCORES_ACTIONS.FETCH_GAME_SCORES_SUCCESS:
      return {
        ...state,
        ...data,
        loading: false,
      };
    case GAME_SCORES_ACTIONS.FETCH_GAME_SCORES_FAILURE:
      return {
        ...state,
        errorMessage,
        loading: false,
      };
    default:
      return state;
  }
}