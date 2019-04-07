import * as actionTypes from './actionTypes';
import axios from '../../axios-quandl';
import * as apiKeys from '../../apiKeys';

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

export const setShareValue = ( symbol, value ) => {
    return {
        type: actionTypes.SET_SHARE_VALUE,
        symbol,
        value
    };
};

export const fetchShares = (value) => {
    return dispatch => {
        axios.get(`datasets.json?query=${value}&per_page=10&page=1&database_code=WIKI`).then(response => {
            console.log(response);
            dispatch(setShares(response.data.datasets));
        });
    };
};

export const fetchShareValue = (share) => {
    return dispatch => {
        requestShareValue(dispatch, share);
    };
};

function requestShareValue(dispatch, share) {
    axios.get(`datasets/${share.databaseCode}/${share.symbol}/data.json?api_key=${apiKeys.quandl}`, { headers: { 'Access-Control-Allow-Origin': '*' }}).then(response => {
        try {
            let value = parseFloat(response.data.dataset_data.data[0][4]);
            console.log(value);
            dispatch(setShareValue(share.symbol, value));
        } catch(error) {
            console.error('Caught Error:', error);
            requestShareValue(dispatch, share);
        }
    }, error => {
        console.error('Caught Error:', error);
        requestShareValue(dispatch, share);
    });
}