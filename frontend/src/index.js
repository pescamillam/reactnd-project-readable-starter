import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducer';

const history = createHistory();

const logger = store => next => action => {
	console.group(action.type);
	console.info('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	console.groupEnd(action.type);
	return result;
};

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger, routerMiddleware(history)),
);
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route match="/" component={App} />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
