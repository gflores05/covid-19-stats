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
    if (error.response.status === 401) {
      yield put(
        actions.refreshToken({
          func: actions.loadStats,
          data: {}
        })
      );
    } else {
      yield put(actions.loadStatsFail(error));
    }
  }
}

function* syncStats() {
  const accessToken = getAccessToken();

  try {
    yield axios.post(
      `${process.env.REACT_APP_API_URL}/sync`,
      {},
      {
        headers: {
          Authorization: accessToken
        }
      }
    );

    yield put(actions.syncStatsSuccess());
  } catch (error) {
    if (error.response.status === 401) {
      yield put(
        actions.refreshToken({
          func: actions.syncStats,
          data: {}
        })
      );
    } else {
      yield put(actions.syncStatsFail(error));
    }
  }
}

function* selectStats(action) {
  const accessToken = getAccessToken();

  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_API_URL}/statistics/${action.country}`,
      {
        headers: {
          Authorization: accessToken
        }
      }
    );

    yield put(actions.selectStatsSuccess(response.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(
        actions.refreshToken({
          func: actions.selectStats,
          data: action
        })
      );
    } else {
      yield put(actions.selectStatsFail(error));
    }
  }
}

function* saveStats(action) {
  const accessToken = getAccessToken();

  try {
    const response = yield axios.put(
      `${process.env.REACT_APP_API_URL}/statistics/${action.stats.country}`,
      action.stats,
      {
        headers: {
          Authorization: accessToken
        }
      }
    );

    yield put(actions.saveStatsSuccess(response.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(
        actions.refreshToken({
          func: actions.saveStats,
          data: action
        })
      );
    } else {
      yield put(actions.saveStatsFail(error));
    }
  }
}

function* loadStatsFail(action) {
  yield console.error(action.error);
}

export function* watchStats() {
  yield takeEvery(actionTypes.LOAD_STATS, loadStats);
  yield takeEvery(actionTypes.LOAD_STATS_FAIL, loadStatsFail);
  yield takeEvery(actionTypes.SYNC_STATS, syncStats);
  yield takeEvery(actionTypes.SELECT_STATS, selectStats);
  yield takeEvery(actionTypes.SAVE_STATS, saveStats);
}
