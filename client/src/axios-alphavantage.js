import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.alphavantage.co/query?'
});

export default instance;