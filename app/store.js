import { createStore, applyMiddleware, compose } from 'redux';
import { statusReducer } from './reducers/statusReducer';
import { createLogger  } from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = compose(
    applyMiddleware(thunk, createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(statusReducer, middlewares);


