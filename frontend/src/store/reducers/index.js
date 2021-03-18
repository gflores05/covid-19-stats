import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import continentsReducer from './continents.reducer';
import statsReducer from './stats.reducer';

const IndexReducer = (history) =>
  combineReducers({
    continents: continentsReducer,
    stats: statsReducer,
    router: connectRouter(history)
  });

export default IndexReducer;
