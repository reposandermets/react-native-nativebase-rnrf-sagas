import { all } from 'redux-saga/effects'
import { watchCounter } from './containers/page-counter/sagas';

export default function* rootSaga() {
  yield all([
    watchCounter()
  ]);
}
