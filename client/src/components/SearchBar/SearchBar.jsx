import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import style from "./SearchBar.module.css";

export default function SearchBar({handleChange,handleSubmit}) {
  


   return (
      <div className={style.contenedor_bar}>
         <form onChange={handleChange}>
            <input type='search' placeholder='Buscar Perro'/>
            <button 
            className={style.btn} 
            onClick={handleSubmit}>
            Buscar
            </button>

         </form>

      </div>
   );
}