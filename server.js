const express = require('express');
const bodyParser = require('body-parser');
const axios = require('./axios-quandl').instance;
const quandlKey = require('./akiKeys').quandl;
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const User = require('./User.js').User;

var user;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/build')));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
  
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    });
}

app.get('/balance', (req, res) => {
    res.send({ balance: user.balance });
});

app.get('/shares', (req, res) => {
    res.send({ shares: user.shares });
});

app.post('/deposit', (req, res) => {
    user.deposit(parseFloat(req.body.amount));
    res.send({ balance: user.balance });
});

app.post('/withdraw', (req, res) => {
    user.withdraw(parseFloat(req.body.amount));
    res.send({ balance: user.balance });
});

app.post('/purchaseShare', (req, res) => {
    requestShareValue(req.body, (shares) => {
        user.purchaseShares(shares);
        res.send({ balance: user.balance, shares: user.shares });
    });
});

app.post('/sellShare', (req, res) => {
    requestShareValue(req.body, (shares) => {
        user.sellShares(shares);
        res.send({ balance: user.balance, shares: user.shares });
    });
});

app.listen(port, (req, res) => {
    user = new User();

    console.log( `server listening on port: ${port}`);
});

function requestShareValue(share, cb) {
    axios.get(`datasets/${share.databaseCode}/${share.symbol}/data.json?api_key=${quandlKey}`, { headers: { 'Access-Control-Allow-Origin': '*' }}).then(response => {
        try {
            let value = parseFloat(response.data.dataset_data.data[0][4]);
            share.value = value;
            cb(share);
        } catch(error) {
            console.error('Caught Error:', error);
            requestShareValue(share, cb);
        }
    }, error => {
        console.error('Caught Error:', error);
        requestShareValue(share, cb);
    });
}