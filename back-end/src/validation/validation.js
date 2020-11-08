const yup = require('yup');

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

module.exports =
{   
    validate,
    validarPostPartido
}