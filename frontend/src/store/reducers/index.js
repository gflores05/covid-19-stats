import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './auth.reducer';
import continentsReducer from './continents.reducer';
import statsReducer from './stats.reducer';

const IndexReducer = (history) =>
  combineReducers({
    continents: continentsReducer,
    stats: statsReducer,
    auth: authReducer,
    router: connectRouter(history)
  });

export default IndexReducer;
