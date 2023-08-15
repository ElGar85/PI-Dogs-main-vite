
const { getDogs } = require("./getDogs");
require('dotenv').config();


async function getDogsByName(name){
    
    const dogs = await getDogs();
   
    let dogName = dogs.filter(dog => {
     
      if(dog.name.toLowerCase().includes(name.toLowerCase())){
        return dog
        
      }  
       });
         
     return dogName

}

module.exports= {getDogsByName};