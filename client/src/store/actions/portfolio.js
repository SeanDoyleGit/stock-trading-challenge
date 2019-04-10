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
        axios.get('/user-balance').then(response => {
            console.log('fetch balance', response);
            dispatch(setBalance(response.data.balance));
        });
    };
};

export const fetchShares = () => {
    return dispatch => {
        axios.get('/shares').then(response => {
            dispatch(setPortfolioShares(response.data.shares));
        });
    };
};