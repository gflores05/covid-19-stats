import * as actionTypes from './actionTypes';

export const signup = (user) => {
  return {
    type: actionTypes.AUTH_SIGNUP,
    user
  };
};

export const signupSuccess = (auth) => {
  return {
    type: actionTypes.AUTH_SIGNUP_SUCCESS,
    auth
  };
};

export const signupFail = (error) => {
  return {
    type: actionTypes.AUTH_SIGNUP_FAIL,
    error
  };
};

export const login = (user) => {
  return {
    type: actionTypes.AUTH_LOGIN,
    user
  };
};

export const loginSuccess = (auth) => {
  return {
    type: actionTypes.AUTH_LOGIN_SUCCESS,
    auth
  };
};

export const loginFail = (error) => {
  return {
    type: actionTypes.AUTH_LOGIN_FAIL,
    error
  };
};

export const refreshToken = (auth) => {
  return {
    type: actionTypes.AUTH_REFRESH_TOKEN,
    auth
  };
};

export const refreshTokenSuccess = (auth, retry) => {
  return {
    type: actionTypes.AUTH_REFRESH_TOKEN_SUCCESS,
    auth,
    retry
  };
};

export const refreshTokenFail = (error) => {
  return {
    type: actionTypes.AUTH_REFRESH_TOKEN_FAIL,
    error
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const logoutSuccess = () => {
  return {
    type: actionTypes.AUTH_LOGOUT_SUCCESS
  };
};

export const logoutFail = (error) => {
  return {
    type: actionTypes.AUTH_LOGOUT_FAIL,
    error
  };
};

export const verifyLogin = () => {
  return {
    type: actionTypes.AUTH_VERIFY_LOGIN
  };
};

export const verifyLoginSuccess = (auth) => {
  return {
    type: actionTypes.AUTH_VERIFY_LOGIN_SUCCESS,
    auth
  };
};
