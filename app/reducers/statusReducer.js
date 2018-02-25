import * as types from '../constants/actionTypes';

const initialState = { status: '' };

export const statusReducer = (state = initialState, action) => {
    
    const userName = action.payload;
    const status =  userName ? `${userName} is typing` : '';

    switch (action.type) {
        case types.CHANGE_STATUS:
            return Object.assign({}, state, { status });
        default:
            return state;
    }
};