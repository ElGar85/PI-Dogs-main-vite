const { getTeperaments} = require('../controller/getTemperaments');

async function temperamentsHandler (req,res){

    try{
        const resp = await getTeperaments();
    
        if(resp.error){
            return res.status(404).send(resp.error);
        }
            return res.status(200).json(resp);

    }catch(error){
        return res.status(500).send(error.message); 
    }

}

module.exports = { temperamentsHandler };