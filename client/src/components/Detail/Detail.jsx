import React, { useEffect } from "react";
import { useParams,  } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { getDogsId } from "../../redux/actions/actions";
// import style from "./Home.module.css"
// import style1 from "./Detail.module.css"


export default function Detail(){

    const {id} = useParams();
 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogsId(id));   
    },[])
    
    const dogs = useSelector(state => state.dogs)

return (  
    
    <div >
        <h1 >Detalle del personaje:</h1>
        <h2>{id}</h2>
        <h3>Raza: {dogs[0].name}</h3>
        <img src={dogs[0].imgUrl} alt={dogs[0].name} />
        <h3>Peso: {dogs[0].weight}</h3>
        <h3>Altura: {dogs[0].height}</h3>
        <h3>Años de Vida: {dogs[0].life_span}</h3>
        <h3>Temperamento: {dogs[0].temperament}</h3>
        
        
    </div>
)


}