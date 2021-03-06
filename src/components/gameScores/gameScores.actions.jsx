export const GAME_SCORES_ACTIONS = {
  FETCH_GAME_SCORES: 'FETCH_GAME_SCORES',
  FETCH_GAME_SCORES_SUCCESS: 'FETCH_GAME_SCORES_SUCCESS',
  FETCH_GAME_SCORES_FAILURE: 'FETCH_GAME_SCORES_FAILURE',
};

export const getScores = (date) => ({
    type: GAME_SCORES_ACTIONS.FETCH_GAME_SCORES,
    payload: date,
});

