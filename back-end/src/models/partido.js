const mongoose = require('mongoose');

const Partido = new mongoose.Schema({
    fecha: String,
    equipoLocal:String,
    golLocal:Number,
    equipoVisitante:String,
    golVisitante:Number,
    intervalo:String

});

module.exports = mongoose.model('partido',Partido);

