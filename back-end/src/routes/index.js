const router = require('express').Router();
const Partido = require('../models/partido');
const bodyParser=require('body-parser');
var jsonParser = bodyParser.json()

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

router.get('/partido/:id?', jsonParser, async (req, res, next) => {
  const partido = await Partido
  .findby(req.params.id)
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


router.get('/partido/fecha?', jsonParser, async (req, res, next) => {
  const partido = await Partido
  .findby(req.params.fecha)
  .then(response =>{
    res
    .status(200)
    .send(response)})
  .catch(err=>{
    console
    .log(err)
  })
});
  
router.get('/partido/:intervalo?', jsonParser, async (req, res, next) => {
  const partido = await Partido
  .findby(req.params.intervalo)
  .then(response =>{
    res
    .status(200)
    .send(response)})
  .catch(err=>{console.log(err)
  })
});

router.get('/partido/:masGol?',jsonParser, async (req, res, next) => {
  const partido = await Partido
  .findby(req.params.gol)
  .then(response =>{
    res
    .status(200)
    .send(response)})
  .catch(err=>{console.log(err)
  })
});
  
  
router.post('/partido/add',jsonParser, async (req, res, next) => {
  const partido = new Partido(req.body);
  await partido.save();
  res.status(200).send(partido);
});


module.exports = router;