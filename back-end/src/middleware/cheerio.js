const downloadFoxes = async () =>{
    const cheerio = require('cheerio')
    const axios = require('axios')
    const response = await axios.get('https://www.lcfc.com/matches/results');
    //
    console.log(response)
    // 
    const $ = cheerio.load(response.data)
    const listaPartidos = $('.match-item__team match-item__team--away');
    console.log(listaPartidos);
    listaPartidos.each((i,elem) => {
        const title = $(elem).find('.matches-list').text();
        console(title)
    })};

    module.exports = downloadFoxes;