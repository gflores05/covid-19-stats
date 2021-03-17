import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import Immutable from 'seamless-immutable';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import reduxMiddleware from 'react-block-ui/lib/reduxMiddleware';
import Reducers from './reducers';
import Sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
    reduxMiddleware
  ];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV === 'development' && // eslint-disable-line no-undef
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-undef
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-undef
      : compose;

  const store = createStore(
    Reducers(history),
    new Immutable(initialState),
    composeEnhancers(...enhancers)
  );

  sagaMiddleware.run(Sagas);

  return store;
}
