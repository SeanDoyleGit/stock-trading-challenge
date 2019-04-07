const express = require('express');
const bodyParser = require('body-parser');
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

app.post('/deposit', (req, res) => {
    user.deposit(parseFloat(req.body.amount));
    res.send({ balance: user.balance });
});

app.post('/withdraw', (req, res) => {
    user.withdraw(parseFloat(req.body.amount));
    res.send({ balance: user.balance });
});

app.listen(port, (req, res) => {
    user = new User();

    console.log( `server listening on port: ${port}`);
});