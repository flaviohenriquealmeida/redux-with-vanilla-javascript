import * as types from '../constants/actionTypes.js';

export const changeStatus = text => 
    dispatch =>
        setTimeout(() => 
            dispatch({
                type: types.CHANGE_STATUS,
                payload: text
            })
        , 1000);