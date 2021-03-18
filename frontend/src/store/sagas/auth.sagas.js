import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'universal-cookie';

import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions';

const cookies = new Cookies();

function* saveAuthCookies(action) {
  try {
    yield cookies.set('accessToken', action.auth.accessToken);
    yield cookies.set('refreshToken', action.auth.refreshToken);
    yield cookies.set('username', action.auth.username);
  } catch (error) {
    yield console.error(error);
  }
}

function* removeAuthCookies() {
  yield cookies.remove('accessToken');
  yield cookies.remove('refreshToken');
  yield cookies.remove('username');
}

function* verifyLogin() {
  const accessToken = cookies.get('accessToken');

  if (accessToken) {
    const refreshToken = cookies.get('refreshToken');
    const username = cookies.get('username');

    yield put(
      actions.verifyLoginSuccess({
        username,
        accessToken,
        refreshToken
      })
    );
  } else {
    yield put(actions.verifyLoginSuccess(null));
  }
}

function* signup(action) {
  try {
    const response = yield axios.post(
      `${process.env.REACT_APP_API_URL}/auth/signup`,
      action.user
    );

    if (response.status === 200) {
      yield put(actions.signupSuccess(response.data));
    } else {
      yield put(actions.signupFail(response.data.status));
    }
  } catch (error) {
    yield put(actions.signupFail(error.response.data.status));
  }
}

function* login(action) {
  try {
    const response = yield axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      action.user
    );

    if (response.status === 200) {
      yield put(actions.loginSuccess(response.data));
    } else {
      yield put(actions.loginFail(response.data.status));
    }
  } catch (error) {
    yield put(actions.loginFail(error.response.data.status));
  }
}

function* refreshToken(action) {
  try {
    const refreshToken = cookies.get('refreshToken');
    const username = cookies.get('username');

    const response = yield axios.post(
      `${process.env.REACT_APP_API_URL}/auth/refreshToken`,
      {
        refreshToken,
        username
      }
    );

    if (response.status === 200) {
      yield put(actions.refreshTokenSuccess(response.data));

      if (action.retry) {
        yield put(action.retry.func(action.retry.data));
      }
    } else {
      yield put(actions.refreshTokenFail(response.data.status));
    }
  } catch (error) {
    yield put(actions.refreshTokenFail(error.response.data.status));
  }
}

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_SIGNUP, signup);
  yield takeEvery(actionTypes.AUTH_SIGNUP_SUCCESS, saveAuthCookies);
  yield takeEvery(actionTypes.AUTH_LOGIN, login);
  yield takeEvery(actionTypes.AUTH_LOGIN_SUCCESS, saveAuthCookies);
  yield takeEvery(actionTypes.AUTH_REFRESH_TOKEN, refreshToken);
  yield takeEvery(actionTypes.AUTH_REFRESH_TOKEN_SUCCESS, saveAuthCookies);
  yield takeEvery(actionTypes.AUTH_REFRESH_TOKEN_FAIL, removeAuthCookies);
  yield takeEvery(actionTypes.AUTH_LOGOUT, removeAuthCookies);
  yield takeEvery(actionTypes.AUTH_VERIFY_LOGIN, verifyLogin);
}
