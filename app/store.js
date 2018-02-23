import { createStore } from 'redux';
import { statusReducer } from './reducers/statusReducer';
export const store = createStore(statusReducer);