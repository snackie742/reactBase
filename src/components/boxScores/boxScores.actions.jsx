export const BOX_SCORE_ACTIONS = {
  FETCH_BOX_SCORES: 'FETCH_BOX_SCORES',
  FETCH_BOX_SCORES_SUCCESS: 'FETCH_BOX_SCORES_SUCCESS',
  FETCH_BOX_SCORES_FAILURE: 'FETCH_BOX_SCORES_FAILURE',
  CLEAR_BOX_SCORES: 'CLEAR_BOX_SCORES',
};

export const getBoxScores = gameString => ({
    type: BOX_SCORE_ACTIONS.FETCH_BOX_SCORES,
    payload: gameString,
});

export const clearBoxScores = () => ({
  type: BOX_SCORE_ACTIONS.CLEAR_BOX_SCORES,
});

