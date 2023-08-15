const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds/";
require('dotenv').config();
const {API_KEY} = process.env;
const { Dog, Temperaments } = require('../db')
// creamos  funcion controladora que nos pide la informacion de los perros a la api
async function getDogs(){
    
        const resp = await axios(`${URL}?api_key=${API_KEY}`);
        const {data} = resp;
        
        const dogsApi = data.map((dog)=>{
           return {
                id: Number(dog.id),
                name: dog.name,
                imgUrl: dog.image.url, //objeto imagen
                weight: dog.weight.metric,  
                height: dog.height.metric,  
                life_span: dog.life_span,
                temperament: dog.temperament,
            };
        })

        // const dogBd = await Dog.findAll();

        // return dogsApi.concat(dogBd);
        return dogsApi
           
}


module.exports = {
    getDogs,
    
}