import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import portfolioReducer from './store/reducers/portfolio';
import sharesReducer from './store/reducers/shares';
import transactionHistoryReducer from './store/reducers/transactionHistory';

import './index.css';

const rootReducer = combineReducers({
    portfolio: portfolioReducer,
    shares: sharesReducer,
    transactionHistory: transactionHistoryReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
