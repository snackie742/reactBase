import { takeEvery, put } from 'redux-saga/effects';
import { BOX_SCORE_ACTIONS } from './boxScores.actions';
import api from '../../sagas/api';

export function* getBoxScores({ payload: gameString }) {
  const { getBoxScores } = api.getBoxScores;
  try{
    const response = yield getBoxScores(gameString);
    const { status, data } = response;
    if (status === 200) {
      yield put({
        type: BOX_SCORE_ACTIONS.FETCH_BOX_SCORES_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: BOX_SCORE_ACTIONS.FETCH_BOX_SCORES_FAILURE,
        errorMessage: 'Failed to load Games',
      });
    }
  } catch (e){
    if(e.response){
      yield put({
        type: BOX_SCORE_ACTIONS.FETCH_BOX_SCORES_FAILURE,
        errorMessage: 'Failed to load Games' + e.response,
      });
    }
  }
}

export function* watchGetBoxScores() {
  yield takeEvery(BOX_SCORE_ACTIONS.FETCH_BOX_SCORES, getBoxScores);
}