import { all } from 'redux-saga/effects'
import { watchIncrementAsync } from './containers/page-counter/sagas';

export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ]);
}
