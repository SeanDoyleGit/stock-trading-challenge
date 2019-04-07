const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://www.quandl.com/api/v3/'
});

module.exports.instance = instance;