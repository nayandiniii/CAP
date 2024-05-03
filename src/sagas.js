// sagas/index.js (root saga)
import { all } from 'redux-saga/effects';
import { watchFetchCandidates } from './candidates';

export default function* rootSaga() {
  yield all([
    watchFetchCandidates()
    // Add other sagas here if you have any
  ]);
}
