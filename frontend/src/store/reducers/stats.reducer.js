import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities';
import { omit } from 'lodash';

const initialState = {
  list: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_STATS:
    case actionTypes.LOAD_STATS_SUCCESS:
    case actionTypes.LOAD_STATS_FAIL:
      return updateObject(state, omit(action, ['type', 'error']));
    default:
      return state;
  }
};

export default reducer;
