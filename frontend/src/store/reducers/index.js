import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const IndexReducer = (history) =>
  combineReducers({
    router: connectRouter(history)
  });

export default IndexReducer;
