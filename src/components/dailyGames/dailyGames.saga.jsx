import { takeEvery, put } from 'redux-saga/effects';
import { DAILY_GAME_ACTIONS } from './dailyGames.actions';
import api from '../../sagas/api';

export function* getGames({ payload: date }) {
  console.log('saga');
  const { getGames } = api.getGames;
  console.log(getGames);
  try{
    const response = yield getGames();
    const { status, data } = response;
    console.log(response);
  } catch (e){
    if(e.response){
      console.log('exception');
    }
  }
}

export function* watchGetGames() {
  yield takeEvery(DAILY_GAME_ACTIONS.FETCH_DAILY_GAMES, getGames);
}