import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
    searchValue: '',
    shares: []
};

const reducer = (state = initialState, action) => {

    if(action.type === actionTypes.SET_SEARCH_VALUE) {
        let newState = _.cloneDeep(state);
        newState.searchValue = action.value;
        return newState;
    }

    if(action.type === actionTypes.SET_SHARES) {
        let newState = _.cloneDeep(state);
        newState.shares = action.shares;

        return newState;
    }
    
    if(action.type === actionTypes.SET_SHARE_PRICE) {
        let newState = _.cloneDeep(state);
        let share = newState.shares.find(share => share.symbol === action.symbol);
        
        if(share) {
            share.price = action.price;
        }

        return newState;
    }

    return state;
}

export default reducer;