const { Dog, Temperaments } = require('../db');

async function createDog(Imagen, Nombre, Altura, Peso, Años_de_vida, temperamento){
    
    await Dog.create({ Imagen, Nombre, Altura, Peso, Años_de_vida })
    
        // await newDog.addTemperaments(temperamento)
    }


module.exports = { createDog };