import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

//import { AsyncStorage } from 'react-native';
//import { persistStore } from 'redux-persist';

import getRootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function getStore(cb) {

  const store = createStore(
    getRootReducer(),
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

/* //Needs more work adding perstStore nad keeping render tests running
  persistStore(store, { storage: AsyncStorage }, () => {
    sagaMiddleware.run(rootSaga);
    if (cb) {
      cb();
    }
  });
*/
  return store;
}
