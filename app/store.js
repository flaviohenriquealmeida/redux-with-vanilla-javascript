import { createStore, applyMiddleware } from 'redux';
import { statusReducer } from './reducers/statusReducer';
import { createLogger  } from 'redux-logger';

const middlewares = applyMiddleware(createLogger());
export const store = createStore(statusReducer, middlewares);