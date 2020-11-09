const router = require('express').Router();
const Partido = require('../models/partido');
const bodyParser=require('body-parser');
var jsonParser = bodyParser.json()
const downloadFoxes = require('../middleware/cheerio');
const validacion = require('../validation/validation');
const { filtrarFecha } = require('../validation/validation');

router.get('/', (req,res,next) => {
    downloadFoxes()});

router.get('/partido', jsonParser, async (req, res, next) => {
  const partido = await Partido
  .find(req.params.id)
  .then(response =>{
    res
    .status(200)
    .send(response)})
  .catch(err=>{console
    .log(err)})
  
});

router.get('/partido/ultimoPartido', jsonParser, async (req, res, next) => {
    const partido = await Partido
    .find(req.params.id)
    .sort({$natural:-1})
    .limit(1)
    .then(response =>{
      res
      .status(200)
      .send(response)})
    .catch(err=>{console
      .log(err)})
    
  });

router.get('/partido/:id', jsonParser, async (req, res, next) => {
  const partido = await Partido
  .findById(req.params.id)
  .then(response =>{
    res
    .status(200)
    .send(response)
  })
  .catch(
    err=>{console
      .log(err)
  })
});


router.get('/partido/:fecha', jsonParser, async (req, res, next) => {
  const partido = await Partido
  .findby({intervalo : req.params.id})
  .then(response =>{
    res
    .status(200)
    .send(response)})
  .catch(err=>{
    console
    .log(err)
  })
});
  
router.get('/partido/:intervalo', jsonParser, async (req, res, next) => {
  const partido = await Partido
  .findby({intervalo:req.intervalo.id})
  .then(response =>{
    res
    .status(200)
    .send(response)})
  .catch(err=>{console.log(err)
  })
});

router.get('/partido/:masGol',jsonParser, async (req, res, next) => {
  const partido = await Partido
  .find()
  .then(response =>{
    res
    .status(200)
    .send(response)})
  .catch(err=>{console.log(err)
  })
});
  
  
router.post('/partido/add',validacion.validate(validacion.validarPostPartido),jsonParser, async (req, res, next) => {
  const partido = new Partido(req.body);
  await partido.save()
  .then(response =>{
    res
    .status(200)
    .send(response)})
  .catch(err=>{console.log(err)
  })
});

router.use((error,req,res,next)=>{
  res.status(404).json({
    status:'error',
    message:error.message
  })
})

module.exports = router;