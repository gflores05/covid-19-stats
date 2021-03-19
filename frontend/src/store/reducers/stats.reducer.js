import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities';
import { omit } from 'lodash';

const initialState = {
  list: [],
  loading: false,
  syncing: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_STATS:
    case actionTypes.LOAD_STATS_SUCCESS:
    case actionTypes.LOAD_STATS_FAIL:
      return updateObject(state, omit(action, ['type', 'error']));
    case actionTypes.SYNC_STATS:
      return updateObject(state, { syncing: true });
    case actionTypes.SYNC_STATS_SUCCESS:
    case actionTypes.SYNC_STATS_FAIL:
      return updateObject(state, { syncing: false });
    default:
      return state;
  }
};

export default reducer;
