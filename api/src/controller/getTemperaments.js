const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds/";
require('dotenv').config();
const {API_KEY} = process.env;
const { Dog, Temperaments } = require('../db')
const { getDogs } = require("./getDogs");


async function getTeperaments (){


   // Obtener temperamentos de la API
  const dogs = await getDogs();
  
   // Filtrar y obtener los temperamentos únicos
  const temperaments = new Set();
  dogs.forEach((dog) => {
    if (dog.temperament) {
          dog.temperament.split(',').forEach((temp) => temperaments.add(temp.trim()));
        }
    });
  
// Guardar los temperamentos en la base de datos
  await Temperaments.bulkCreate([...temperaments].map((Nombre) => ({ Nombre })));
  
    
    const temperamentBd = Temperaments.findAll({
        attributes: ['Nombre']
      })
    
      return temperamentBd;
}

module.exports = { getTeperaments }