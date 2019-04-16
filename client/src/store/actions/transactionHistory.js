import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setTransactionHistory = ( history ) => {
    return {
        type: actionTypes.SET_TRANSACTION_HISTORY,
        history
    };
};

export const fetchTransactionHistory = () => {
    return dispatch => {
        axios.get('/get-transaction-history').then(response => {
            dispatch(setTransactionHistory(response.data.history));
        });
    };
};