const axios = require('../middleware/axios');
const { response } = require('express');
const router = require('express').Router();
// router.get('/',(req,res) => { res.send('hola')});

const downloadFoxes = async () =>{
    const cheerio = require('cheerio')

    const response = await axios.get('https://www.lcfc.com/matches/fixtures');
    // console.log(response)
    // router.get('/'), () => {res.send(response.data)}
    const $ = cheerio.load(response.data)
    const listaPartidos = $('.matches-list');
    console.log(listaPartidos);
    listaPartidos.each((i,elem) => {
        const title = $(elem).find('.match-item__team match-item__team--away').text().trim();
        console(title)
    })
    // router.get('/'), () => {res.send(listaPartidos)}

}

module.exports = router;

module.exports = downloadFoxes;