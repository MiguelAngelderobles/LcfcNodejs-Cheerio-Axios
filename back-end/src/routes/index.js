const router = require('express').Router();
const Partido = require('./models/partido');

router.get('/partido/ultimoPartido', async (req, res, next) => {
    const partido = await Partido
    .find(req.params.id)
    .sort({$natural:-1})
    .limit(1)
    .then(perfiles =>{
      res
      .status(200)
      .send(perfiles)})
    .catch(err=>{console
      .log(err)})
    
  });

router.get('/partido/:id?', async (req, res, next) => {
  const partido = await Partido
  .findby(req.params.id)
  .then(perfiles =>{
    res
    .status(200)
    .send(perfiles)
  })
  .catch(
    err=>{console
      .log(err)
  })
});


router.get('/partido/fecha?', async (req, res, next) => {
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
  
router.get('/perfil/:intervalo?', async (req, res, next) => {
  const partido = await Partido
  .findby(req.params.intervalo)
  .then(response =>{
    res
    .status(200)
    .send(response)})
  .catch(err=>{console.log(err)
  })
});

router.get('/perfil/:masGol?', async (req, res, next) => {
  const partido = await Partido
  .findby(req.params.gol)
  .then(response =>{
    res
    .status(200)
    .send(response)})
  .catch(err=>{console.log(err)
  })
});
  
  
router.post('/perfil/add', async (req, res, next) => {
  const partido = new Partido(req.body)
  await partido
  .save()
  .then(response =>{
    res.status(200)
    res.send(response)})
  .catch(err=>{
    console.log(err)
  })
});


module.exports = router;