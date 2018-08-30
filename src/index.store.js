import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducer/';
import sagas from './sagas';

const mwSaga = createSagaMiddleware();
const mwLogger = createLogger();

const rootReducer = combineReducers({
  ...reducers,
});

const middleware = [
  mwSaga, mwLogger,
];

export default function configureStore(initialState) {
  const enhancers = composeWithDevTools(applyMiddleware(...middleware));

  const store = createStore(rootReducer, initialState, enhancers);

  mwSaga.run(sagas);
  return store;
}
