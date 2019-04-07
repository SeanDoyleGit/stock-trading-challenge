import * as actionTypes from '../actions/actionTypes';

const initialState = {
    balance: 0
};

const reducer = (state = initialState, action) => {

    if(action.type === actionTypes.SET_BALANCE) {
        return {...state, balance: action.balance };
    }

    return state;
}

export default reducer;