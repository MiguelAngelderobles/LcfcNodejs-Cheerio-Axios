const yup = require('yup');
const Partido = require('../models/partido')

function validate(validacion){
    return (req,res,next) =>{
        try{
            validacion(req.body);
            next();
        }
        catch(error){
            next(error);
        }
    }
}

function validarPostPartido (data) {
    const schema = yup.object().shape({
        fecha: yup.string().min(5).required(),
        lugar: yup.string().min(5).required(),
        equipoLocal: yup.string().required(),
        golLocal: yup.number().min(1).max(20).integer().required(),
        equipoVisitante: yup.string().required(),
        golVisitante: yup.number().min(1).max(20).integer().required(),
        intervalo: yup.string().required()
    })
    
    schema.validate(data)
}

function filtrarIntervalo(partido,intervalo){
  
    const  [intervaloObtenidos]= Partido.filter(element => (element.intervalo === intervalo)) 
    return intervaloObtenidos
}


function filtrarFecha(partido,fecha){
    const  [intervaloObtenidos]= Partido.filter(partido => (partido.fecha === fecha)) 
    return intervaloObtenidos
}

// function puntos(partido){
//     const leicester = "Leicester"
//     const [partidosObtenidos] = Partido.filter(element => element.equipoLocal == leicester) 
//     const [partidosObtenidos] = Partido.filter(element => element.equipoVisitante == leicester)
//     const puntos = 3* partidosObtenidos.length()
    
// }

function puntos(partido){
    const leicester = "Leicester"
    const [partidosObtenidos] = Partido.filter(element => element.equipoLocal != leicester) + Partido.filter(element => element.equipoVisitante != leicester)}

    
// }




module.exports =
{   
    validate,
    validarPostPartido,
    filtrarIntervalo,
    filtrarFecha
}