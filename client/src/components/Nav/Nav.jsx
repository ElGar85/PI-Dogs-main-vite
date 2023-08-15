import React from "react";
import style from "./Nav.module.css"
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = (props) => {

    return (
        <div className={style.contenedorNav}>
            <Link className={style.links} to="/home">INICIO</Link>
            <Link className={style.links} to="/form">CREAR PERRO</Link>
            <SearchBar handleChange = {props.handleChange} handleSubmit = {props.handleSubmit} />
        </div>
    )
}

export default Nav;