/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";

function Cards(props) {
  
  const [dogsPage,setDogsPage] = useState(8);
  
  const [currentPage, setCurrentPage] = useState(1);
 
  // console.log(dogsApi)
  const maximo = Math.ceil(props.dogs.length / dogsPage);
  

  const prevHandler = () => {
    console.log("prev")
    const prevPage = currentPage - 1;
    // const nextDogs = nextPage + CARD_PER_PAGE;

     if (prevPage < 1) return setCurrentPage(maximo)
    setCurrentPage(prevPage);
  }

  const nextHandler = () => {
    console.log("next")
   
    const nextPage = currentPage + 1;
   
     if (nextPage > maximo) return setCurrentPage(1);

    setCurrentPage(nextPage);
  }

  return (
    <div className={style.container}>
      {props.dogs.slice((currentPage - 1 ) * dogsPage, (currentPage - 1 ) * dogsPage +  dogsPage ).map((dog) => {
        return (
          <Card
            id={dog.id}
            key={dog.id}
            name={dog.name}
            weight={dog.weight}
            height={dog.height}
            life_span={dog.life_span}
            temperaments={dog.temperament}
            imgUrl={dog.imgUrl}
          />
        );
      })}
      <div>
        <h3>Pagina: {currentPage}</h3> 
      <button onClick={prevHandler}>Prev</button> 
      <button onClick={nextHandler}>Nex</button>
      </div>
       

    </div>
  );
}


export default Cards;
