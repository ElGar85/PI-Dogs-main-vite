import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions/actions";


export default function Landing(props) {
 
  const dispatch = useDispatch()

  useEffect(() => {
    // Cuando el componente se monta
    // eslint-disable-next-line react/prop-types
    dispatch(getDogs());   
    // props.getDogs();
  }, []);

  let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/home`; 
      navigate(path);
    }


  return (
    <div className= "contenedor">
      <h1 className="titulo">Bienvenidos</h1>

      <button type="button" className="boton" onClick={routeChange}>Ingresar</button>
     
    </div>
  );
}
