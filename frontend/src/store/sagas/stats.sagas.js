import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions';

function* loadStats({ continent }) {
  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_API_URL}/statistics?continent=${continent}`
    );

    yield put(actions.loadStatsSuccess(response.data.results));
  } catch (error) {
    yield put(actions.loadStatsFail(error));
  }
}

function* loadStatsFail(action) {
  yield console.error(action.error);
}

export function* watchStats() {
  yield takeEvery(actionTypes.LOAD_STATS, loadStats);

  yield takeEvery(actionTypes.LOAD_STATS_FAIL, loadStatsFail);
}
