import { takeEvery, put } from 'redux-saga/effects';
import { GAME_SCORES_ACTIONS } from './gameScores.actions';
import api from '../../sagas/api';

export function* getScores({ payload: date }) {
  const { getScores } = api.getScores;
  try{
    const response = yield getScores(date);
    const { status, data } = response;
    if (status === 200) {
      yield put({
        type: GAME_SCORES_ACTIONS.FETCH_GAME_SCORES_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: GAME_SCORES_ACTIONS.FETCH_GAME_SCORES_FAILURE,
        errorMessage: 'Failed to load Games',
      });
    }
  } catch (e){
    if(e.response){
      yield put({
        type: GAME_SCORES_ACTIONS.FETCH_GAME_SCORES_FAILURE,
        errorMessage: 'Failed to load Games' + e.response,
      });
    }
  }
}

export function* watchGetScores() {
  yield takeEvery(GAME_SCORES_ACTIONS.FETCH_GAME_SCORES, getScores);
}