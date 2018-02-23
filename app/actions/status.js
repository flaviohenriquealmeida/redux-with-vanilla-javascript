import * as types from '../constants/actionTypes.js';

export const changeStatus = text => ({
    type: types.CHANGE_STATUS,
    payload: text
});