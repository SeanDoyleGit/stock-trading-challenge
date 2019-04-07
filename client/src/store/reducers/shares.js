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
        newState.shares = (action.shares || []).map(share => {
            return {
                databaseCode: share.database_code,
                symbol: share.dataset_code,
                name: share.name.replace('Prices, Dividends, Splits and Trading Volume', '')
            };
        });

        return newState;
    }
    
    if(action.type === actionTypes.SET_SHARE_VALUE) {
        let newState = _.cloneDeep(state);
        let share = newState.shares.find(share => share.symbol === action.symbol);
        
        if(share) {
            share.value = action.value;
        }

        return newState;
    }

    return state;
}

export default reducer;