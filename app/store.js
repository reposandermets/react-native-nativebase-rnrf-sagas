import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';

import getRootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default function getStore(cb) {

  const store = createStore(
    getRootReducer(),
    applyMiddleware(sagaMiddleware)
  );

  persistStore(store, { storage: AsyncStorage }, () => {
    sagaMiddleware.run(rootSaga);
    if (cb) {
      cb();
    }
  });

  return store;
}
