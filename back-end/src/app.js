const cron = require('node-cron');

cron.schedule('* * * * *',() =>{
    const express = require('express')
    const app = express('')
    const configApp = require('./configuration/config')
    const middlewareApp = require('./middleware/middleware')
    const updatabase = require('./database/database')
    const downloadFoxes = require('./routes/index')
    configApp(app)
    updatabase()
    middlewareApp(app,express)
    downloadFoxes()
    // app.use('/', require('./routes/index'));
});