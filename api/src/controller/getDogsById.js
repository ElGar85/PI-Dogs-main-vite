
const { getDogs } = require("./getDogs");



async function getDogsById(idRaza){
  
    const dogs = await getDogs();

   let dogId = dogs.filter(dog => {
    
     if(dog.id === Number(idRaza)){
        return dog
     }
    });
        
    return dogId

  
    // recibimos el id desde el frond-end por parametro
    // const {idRaza} = req.params;

    // try{
    //     // consultamos si tenemos algun algun perro con ese id en nuestra BD
    //     const dogBd = await Dog.findOne({
    //         where: {ID:idRaza},
    //         include: [{ model: Temperaments, through: 'dog_temperaments' }],
    //         });
    //         // si encontramos alguna coincidencia enviamos una respuesta
    //     if(dogBd){
    //         return res.status(200).json(dogBd);
            
    //     }else{ //si no hay coincidencias buscamos en la api y enviamos la respuesta con los datos solicitados
    //         const resp = await axios(`${URL}${idRaza}`,{
    //             headers: {
    //                 'x-api-key': API_KEY
    //             }
    //         });
    //         const {data} = resp;
    //         // respondemos con un error 
    //         if(data.error){
    //             return res.status(404).send(data.error);
    //         }
    //         const imgUrl = data.image;
    //         console.log(imgUrl);
    //         const { id, name, weight,height, life_span,temperament} = data;
    //         const dog = {
    //             id: Number(id),
    //             name,
    //             imgUrl, //objeto imagen
    //             weight: weight.metric,  
    //             height: height.metric,  
    //             life_span,
    //             temperament,
    //         };
    // return res.status(200).json(dog);
    //     }
        
    // }catch(error){
    //     return res.status(500).send(error.message);
    // }

}

module.exports= {getDogsById};