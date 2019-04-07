import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setBalance = ( balance ) => {
    return {
        type: actionTypes.SET_BALANCE,
        balance
    };
};

export const setPortfolioShares = ( shares ) => {
    return {
        type: actionTypes.SET_PORTFOLIO_SHARES,
        shares
    };
};

export const fetchBalance = () => {
    return dispatch => {
        axios.get('/balance').then(response => {
            dispatch(setBalance(response.data.balance));
        });
    };
};