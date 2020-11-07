const downloadFoxes = async () =>{
    const cheerio = require('cheerio')

    const response = await axios.get('https://www.lcfc.com/matches/results');
    // console.log(response)
    // router.get('/'), () => {res.send(response.data)}
    const $ = cheerio.load(response.data)
    const listaPartidos = $('.matches-list');
    console.log(listaPartidos);
    listaPartidos.each((i,elem) => {
        const title = $(elem).find('.match-item__team match-item__team--away').text().trim();
        console(title)
    })};

    module.exports = downloadFoxes;