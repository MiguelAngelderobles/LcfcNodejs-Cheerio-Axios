const cron = require('node-cron');
const express = require('express')
const app = express('')
const configApp = require('./configuration/config')
const middlewareApp = require('./middleware/middleware')
const updatabase = require('./database/database')

configApp(app)
updatabase()
middlewareApp(app,express)
//holaaaaa
app.use('/', require('./routes/index'));


// cron.schedule('* * * * *',() =>{
//     const downloadFoxes = require('./middleware/cheerio')
//     downloadFoxes()
// });
