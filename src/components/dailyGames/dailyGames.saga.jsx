import { takeEvery, put } from 'redux-saga/effects';
import { DAILY_GAME_ACTIONS } from './dailyGames.actions';
import api from '../../sagas/api';

export function* getGames({ payload: date }) {
  const { getGames } = api.getGames;
  try{
    const response = yield getGames(date);
    const { status, data } = response;
    if (status === 200) {
      yield put({
        type: DAILY_GAME_ACTIONS.FETCH_DAILY_GAMES_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: DAILY_GAME_ACTIONS.FETCH_DAILY_GAMES_FAILURE,
        errorMessage: 'Failed to load Games',
      });
    }
  } catch (e){
    if(e.response){
      yield put({
        type: DAILY_GAME_ACTIONS.FETCH_DAILY_GAMES_FAILURE,
        errorMessage: 'Failed to load Games' + e.response,
      });
    }
  }
}

export function* watchGetGames() {
  yield takeEvery(DAILY_GAME_ACTIONS.FETCH_DAILY_GAMES, getGames);
}