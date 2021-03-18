import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions';

function* loadContinents(action) {
  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_API_URL}/continents`
    );

    yield put(actions.loadContinentsSuccess(response.data.results));
  } catch (error) {
    console.error(error);
  }
}

function* loadContinentsFail(action) {
  yield console.error(action.error);
}

export function* watchContinents() {
  yield takeEvery(actionTypes.LOAD_CONTINENTS, loadContinents);

  yield takeEvery(actionTypes.LOAD_CONTINENTS_FAIL, loadContinentsFail);
}
