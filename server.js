const express = require('express');
const bodyParser = require('body-parser');
const axios = require('./axios-iex').instance;
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const User = require('./User.js').User;
const Shares = require('./Shares.js').Shares;
const TransactionHistory = require('./TransactionHistory.js').TransactionHistory;

var shares;
var user;
var transactionHistory;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/get-balance', (req, res) => {
    res.send({ balance: user.balance });
});

app.get('/get-transaction-history', (req, res) => {
    res.send({ history: transactionHistory.history });
});

app.get('/get-shares', (req, res) => {
    res.send({ shares: user.shares });
});

app.get('/get-shares-search', (req, res) => {
    res.send({ shares: shares.searchShares(req.query.searchTerm, req.query.amount) });
});

app.get('/get-share-price', (req, res) => {
    requestShareValue(req.query.symbol, (price) => {
        res.send({ price });
    });
});

app.post('/post-deposit', (req, res) => {
    user.deposit(parseFloat(req.body.amount));
    res.send({ balance: user.balance });
});

app.post('/post-withdraw', (req, res) => {
    user.withdraw(parseFloat(req.body.amount));
    res.send({ balance: user.balance });
});

app.post('/post-purchase', (req, res) => {
    requestShareValue(req.body.symbol, (price) => {
        let share = { ...req.body, price };
        if(user.purchaseShares(share)) {
            transactionHistory.addTransaction({ ...share, purchase: true, timestamp: (new Date()).toISOString() });
        }
        res.send({ balance: user.balance, shares: user.shares });
    });
});

app.post('/post-sell', (req, res) => {
    requestShareValue(req.body.symbol, (price) => {
        let share = { ...req.body, price };
        user.sellShares(share);
        transactionHistory.addTransaction({ ...share, purchase: false, timestamp: (new Date()).toISOString() });
        res.send({ balance: user.balance, shares: user.shares });
    });
});

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
  
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    });
}

app.listen(port, (req, res) => {
    user = new User();
    shares = new Shares();
    transactionHistory = new TransactionHistory();

    axios.get('/ref-data/symbols').then(result => {
        shares.setShares(result.data);
        console.log(`received shares`);
    });
    
    console.log( `server listening on port: ${port}`);
});

function requestShareValue(symbol, cb) {
    axios.get(`/stock/${symbol}/price`, { headers: { 'Access-Control-Allow-Origin': '*' }}).then(response => {
        try {
            let value = parseFloat(response.data);
            cb(value);
        } catch(error) {
            console.error('Caught Error:', error);
            requestShareValue(symbol, cb);
        }
    }, error => {
        console.error('Caught Error:', error);
        requestShareValue(symbol, cb);
    });
}