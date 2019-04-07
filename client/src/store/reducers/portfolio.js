import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
    balance: 0,
    shares: []
};

const reducer = (state = initialState, action) => {

    if(action.type === actionTypes.SET_BALANCE) {
        let newState = _.cloneDeep(state);
        newState.balance = action.balance;
        return newState;
    }

    if(action.type === actionTypes.SET_PORTFOLIO_SHARES) {
        let newState = _.cloneDeep(state);
        newState.shares = action.shares;
        return newState;
    }

    return state;
}

export default reducer;