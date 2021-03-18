import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { getAccessToken } from '../../shared/utilities';
import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions';

function* loadStats({ continent, country }) {
  const accessToken = getAccessToken();

  let query = '?';

  query += continent === '*' ? '' : `continent=${continent}&`;
  query += country === '*' ? '' : `country=${country}`;

  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_API_URL}/statistics${query}`,
      {
        headers: {
          Authorization: accessToken
        }
      }
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
