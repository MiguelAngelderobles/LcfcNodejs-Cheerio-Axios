const { html } = require('cheerio');

const downloadFoxes = async () =>{
    const cheerio = require('cheerio')
    const axios = require('axios')
    // const response = await axios.get('https://www.lcfc.com/matches/results');
    const response =await axios.get('https://footballapi-lcfc.pulselive.com/football/fixtures?teams=26&comps&compSeasons&homeTeams&page=0&pageSize=100&sort=desc&statuses=C&altIds=true&provisional=false&detail=2&fbclid=IwAR1SjwIFbOJn_ZC-2rrXyOry4tfG0xUJH-EitDx7hKFH131rgsi36hmFxZU/conte')
    console.log(response.data.content)
    const $ = cheerio.load(response.data.content);
    const listaPartidos = $(response.data.content);
    console.log('el pepe',listaPartidos)
    listaPartidos.each((i,element)=>{
        
    })
     // console.log(listaPartidos);
    //  listaPartidos.each((i,elem) => {
    //     const title = $(elem).find('.wrapper').text().trim();
    //     // console.log(title)
    // })
};

    module.exports = downloadFoxes;