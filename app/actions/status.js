import * as types from '../constants/actionTypes.js';

export const changeStatus = userName => 
    dispatch =>
        setTimeout(() => 
            dispatch({
                type: types.CHANGE_STATUS,
                payload: `${userName} is typing`
            })
        , 1000);