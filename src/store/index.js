import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { createLogger } from "redux-logger";

import reducer from '../reducers';
import rootSaga from '../sagas';

export const initialState = {
  data: {},
  source: 'api',
  status: null,
  loading: false
};

const configureStore = (preloadedState = initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware, createLogger());
  const store = createStore(reducer, preloadedState,
      middleware
  );
  store.runSaga = (...args) => sagaMiddleware.run(...args);

  return store;
};

const store = configureStore();

store.runSaga(rootSaga);

export default store;