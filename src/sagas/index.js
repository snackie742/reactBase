import * as dailyGamesSaga from '../components/dailyGames/dailyGames.saga';
import * as gameScoresSaga from '../components/gameScores/gameScores.saga';

export default function* rootSaga() {
  yield [
    dailyGamesSaga.watchGetGames(),
    gameScoresSaga.watchGetScores(),
  ];
}