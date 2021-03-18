import { all } from 'redux-saga/effects';

import { watchContinents } from './continents.sagas';

export default function* IndexSaga() {
  yield all([watchContinents()]);
}
