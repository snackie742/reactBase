import { testSaga } from 'redux-saga-test-plan';
import { BOX_SCORE_ACTIONS } from './boxScores.actions';

describe('boxScores saga', () => {
  it('fetch success', () => {
    const lookupResult = {
      type: BOX_SCORE_ACTIONS.FETCH_BOX_SCORES_SUCCESS,
      status: 200,
      data: {
        gameboxscores:{
          data: 'some data',
        },
      },
    };
    const action = { type: BOX_SCORE_ACTIONS.FETCH_BOX_SCORES, payload: { date: '20180902'} };
    testSaga(requestConstants)
      .next(action)
      .next(lookupResult)
      .put({
        type: BOX_SCORE_ACTIONS.FETCH_BOX_SCORES_SUCCESS,
        boxScores: {
          gameboxscores: {
              data: 'some data',
          },
        },
      });
  });
//   it('constants failure', () => {
//     const lookupResult = {
//       type: CONSTANTS_ACTIONS.RECEIVE_CONSTANTS,
//       status: 406,
//       data: { },
//     };
//     const action = { type: CONSTANTS_ACTIONS.REQUEST_CONSTANTS };
//     const { error, message } = serverError;
//     testSaga(requestConstants)
//       .next(action)
//       .next(lookupResult)
//       .put({
//         type: APP_ACTIONS.ADD_ERRORS,
//         error: { error, message },
//       });
//   });
});
