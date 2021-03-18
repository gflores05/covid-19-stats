import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities';

const initialState = {
  auth: null,
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SIGNUP:
    case actionTypes.AUTH_LOGIN:
    case actionTypes.AUTH_REFRESH_TOKEN:
    case actionTypes.AUTH_LOGOUT:
      return updateObject(state, { loading: true });
    case actionTypes.AUTH_SIGNUP_SUCCESS:
    case actionTypes.AUTH_LOGIN_SUCCESS:
    case actionTypes.AUTH_REFRESH_TOKEN_SUCCESS:
    case actionTypes.AUTH_VERIFY_LOGIN_SUCCESS:
      return updateObject(state, { auth: action.auth, loading: false });
    case actionTypes.AUTH_SIGNUP_FAIL:
    case actionTypes.AUTH_LOGIN_FAIL:
    case actionTypes.AUTH_LOGOUT_FAIL:
      return updateObject(state, { error: action.error, loading: false });
    case actionTypes.AUTH_LOGOUT_SUCCESS:
    case actionTypes.AUTH_REFRESH_TOKEN_FAIL:
      return updateObject(state, { loading: false, auth: null });
    default:
      return state;
  }
};

export default reducer;
