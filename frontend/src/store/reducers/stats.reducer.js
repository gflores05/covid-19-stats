import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities';
import { omit } from 'lodash';

const initialState = {
  list: [],
  loading: false,
  syncing: false,
  selected: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_STATS:
    case actionTypes.LOAD_STATS_SUCCESS:
    case actionTypes.LOAD_STATS_FAIL:
    case actionTypes.SELECT_STATS:
    case actionTypes.SELECT_STATS_SUCCESS:
    case actionTypes.SELECT_STATS_FAIL:
    case actionTypes.SAVE_STATS_SUCCESS:
    case actionTypes.SAVE_STATS_FAIL:
      return updateObject(state, omit(action, ['type']));
    case actionTypes.SYNC_STATS:
      return updateObject(state, { syncing: true });
    case actionTypes.SYNC_STATS_SUCCESS:
    case actionTypes.SYNC_STATS_FAIL:
      return updateObject(state, { syncing: false });
    case actionTypes.SAVE_STATS:
      return updateObject(state, { loading: true });
    default:
      return state;
  }
};

export default reducer;
