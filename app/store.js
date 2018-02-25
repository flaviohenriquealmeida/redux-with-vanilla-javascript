import { createStore, applyMiddleware } from 'redux';
import { statusReducer } from './reducers/statusReducer';
import { createLogger  } from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(thunk, createLogger());
export const store = createStore(statusReducer, middlewares);