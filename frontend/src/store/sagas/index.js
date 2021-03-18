import { all } from 'redux-saga/effects';

import { watchContinents } from './continents.sagas';
import { watchStats } from './stats.sagas';
import { watchAuth } from './auth.sagas';

export default function* IndexSaga() {
  yield all([watchAuth(), watchContinents(), watchStats()]);
}
