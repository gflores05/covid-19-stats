import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import continentsReducer from './continents.reducer';

const IndexReducer = (history) =>
  combineReducers({
    continents: continentsReducer,
    router: connectRouter(history)
  });

export default IndexReducer;
