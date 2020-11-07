const mongoose = require('mongoose');

const Partido = mongoose.Schema({
    fecha: {type :String, required: true,required:String
    },
    equipoLocal :{type :String, required: true,required:String
    },
    golLocal:{type :Number,required: true,min:[0,"No puede ser valores negativos"],max:[20,"No puede ser un valor muy alto"]
    },
    equipoVisitante:{type :String, required: true,required:String
    },
    golVisitante:{type :String, required: true,min:[0,"No puede ser valores negativos"],max:[20,"No puede ser un valor muy alto"]
    },
    intervalo:{type :String, required: true,required:String
}
});

module.exports = mongoose.model('partido',Partido);