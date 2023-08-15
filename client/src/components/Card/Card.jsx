/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div>
      
      <Link to={`/detail/${props.id}`}>
        <img
          className={style.cardImage}
          src={props.imgUrl}
          alt={props.name}
        />
      </Link>
      <h2 className={style.cardInfo}>{props.name}</h2>
      <h2 className={style.cardInfo}>{props.temperaments}</h2>
      <h2 className={style.cardInfo}>{props.weight}</h2>
      
      
      
    </div>
  );
}
