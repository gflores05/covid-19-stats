import { all } from 'redux-saga/effects';

import { watchContinents } from './continents.sagas';
import { watchStats } from './stats.sagas';

export default function* IndexSaga() {
  yield all([watchContinents(), watchStats()]);
}
