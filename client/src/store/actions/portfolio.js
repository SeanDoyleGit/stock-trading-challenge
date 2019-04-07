import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setBalance = ( balance ) => {
    return {
        type: actionTypes.SET_BALANCE,
        balance
    };
};

export const fetchBalance = () => {
    return dispatch => {
        axios.get('/balance').then(response => {
            dispatch(setBalance(response.data.balance));
        });
    };
};