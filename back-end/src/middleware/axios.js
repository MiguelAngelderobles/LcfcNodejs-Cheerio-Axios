const axios = require('axios').default;

module.exports = axios.create({
    baseURL:'https://www.lcfc.com/matches/fixtures'
})
