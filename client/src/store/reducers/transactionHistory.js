import * as actionTypes from '../actions/actionTypes';

const initialState = {
    history: []
};

const reducer = (state = initialState, action) => {

    if(action.type === actionTypes.SET_TRANSACTION_HISTORY) {
        console.log(action.history);
        return { history: action.history };
    }

    return state;
}

export default reducer;