const axios = require('axios');

const api = axios.create({
    baseURL: 'https://fiap-reactjs-presencial.herokuapp.com/challengeSap/',
});

module.exports = api;