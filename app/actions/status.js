import { actionTypes } from '../constants/actionTypes.js';

export const changeStatus = userName => 
    dispatch =>
        setTimeout(() => 
            dispatch({
                type: actionTypes.CHANGE_STATUS,
                payload: `${userName} is typing`
            })
        , 1000);