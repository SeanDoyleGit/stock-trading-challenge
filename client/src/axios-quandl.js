import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.quandl.com/api/v3/'
});

export default instance;