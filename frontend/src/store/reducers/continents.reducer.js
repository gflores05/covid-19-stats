import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities';

const initialState = {
  list: []
};

const loadContinentsSuccess = (state, action) => {
  return updateObject(state, action);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CONTINENTS_SUCCESS:
      return loadContinentsSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
