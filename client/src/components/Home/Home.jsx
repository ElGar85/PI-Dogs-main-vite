// import React from "react";
// importamos los hooks
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


import Nav from "../Nav/Nav"
import Cards from "../Cards/Cards";

function Home() {

  
  const dogs = useSelector((state)=> state.dogs)

  const [searchName, setSearchName] = useState("");
  const [filters, setFilters] = useState(dogs);

 
   const handleChange = (evento) => {
   
    setSearchName(evento.target.value)
   }

   const  handleSubmit = (e) => {
    e.preventDefault()
    const filterd = dogs.filter((dog) => 
    dog.name.toLowerCase().includes(searchName.toLowerCase()));
    setFilters(filterd);
   }

   if(!filters){
    setFilters(dogs)
  }
   console.log(dogs)

  return (
    <div>
       <Nav handleChange = {handleChange} handleSubmit = {handleSubmit} />
      <Cards dogs = {filters}/>
    </div>
  );
}

export default Home;
