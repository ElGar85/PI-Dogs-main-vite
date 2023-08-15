const {createDog} = require('../controller/createDog')

async function postDogsHandler(req,res){

    try{
        const {Imagen, Nombre, Altura, Peso, Años_de_vida, temperamento} = req.body;    
        console.log(Nombre);
        if( Nombre === " " && Altura === " " && Peso === " " && Años_de_vida ===" " && temperamento === " "){
            return res.status(401).send("faltan datos")
        }
        
        const newDog = await createDog(
            Imagen,
            Nombre,
            Altura,
            Peso,
            Años_de_vida
        );
        return res.status(201).json(newDog);
    }catch(error){
        res.status(500).send(error.message);
    }
}

module.exports = { postDogsHandler };