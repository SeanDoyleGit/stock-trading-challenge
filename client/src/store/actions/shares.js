import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setSearchValue = ( value ) => {
    return {
        type: actionTypes.SET_SEARCH_VALUE,
        value
    };
};

export const setShares = ( shares ) => {
    return {
        type: actionTypes.SET_SHARES,
        shares
    };
};

export const setShareValue = ( symbol, price ) => {
    return {
        type: actionTypes.SET_SHARE_PRICE,
        symbol,
        price
    };
};

export const fetchShares = (value) => {
    return dispatch => {
        axios.get(`/get-shares-search?searchTerm=${value}&amount=10`).then(response => {
            console.log(response);
            dispatch(setShares(response.data.shares));
        });
    };
};

export const fetchShareValue = (share) => {
    return dispatch => {
        requestShareValue(dispatch, share);
    };
};

function requestShareValue(dispatch, share) {
    axios.get(`/get-share-price?symbol=${share.symbol}`).then(response => {
        try {
            console.log(response);
            dispatch(setShareValue(share.symbol, response.data.price));
        } catch(error) {
            console.error('Caught Error:', error);
            requestShareValue(dispatch, share);
        }
    }, error => {
        console.error('Caught Error:', error);
        requestShareValue(dispatch, share);
    });
}