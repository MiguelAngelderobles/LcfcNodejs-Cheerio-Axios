const axios = require('axios').default;

module.exports = axios.create({
    baseURL:'https://footballapi-lcfc.pulselive.com/football/fixtures?teams=26&comps&compSeasons&homeTeams&page=0&pageSize=100&sort=desc&statuses=C&altIds=true&provisional=false&detail=2&fbclid=IwAR1SjwIFbOJn_ZC-2rrXyOry4tfG0xUJH-EitDx7hKFH131rgsi36hmFxZU'
})
