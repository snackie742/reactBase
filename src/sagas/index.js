import * as dailyGamesSaga from '../components/dailyGames/dailyGames.saga';

export default function* rootSaga() {
  yield [
    dailyGamesSaga.watchGetGames(),
  ];
}