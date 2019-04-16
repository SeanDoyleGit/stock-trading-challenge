const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://api.iextrading.com/1.0/'
});

module.exports.instance = instance;