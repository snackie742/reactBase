import * as dailyGamesSaga from '../components/dailyGames/dailyGames.saga';
import * as gameScoresSaga from '../components/gameScores/gameScores.saga';
import * as boxScoresSaga from '../components/boxScores/boxScores.saga';

export default function* rootSaga() {
  yield [
    dailyGamesSaga.watchGetGames(),
    gameScoresSaga.watchGetScores(),
    boxScoresSaga.watchGetBoxScores(),
  ];
}