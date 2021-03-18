import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { getAccessToken } from '../../shared/utilities';
import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions';

function* loadContinents(action) {
  const accessToken = getAccessToken();

  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_API_URL}/continents`,
      {
        headers: {
          Authorization: accessToken
        }
      }
    );

    yield put(actions.loadContinentsSuccess(response.data.results));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(
        actions.refreshToken({
          func: actions.loadContinents,
          data: action
        })
      );
    } else {
      yield put(actions.loadContinentsFail(error));
    }
  }
}

function* loadContinentsFail(action) {
  yield console.error(action.error);
}

export function* watchContinents() {
  yield takeEvery(actionTypes.LOAD_CONTINENTS, loadContinents);

  yield takeEvery(actionTypes.LOAD_CONTINENTS_FAIL, loadContinentsFail);
}
