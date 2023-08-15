// destructuramos el router de express y importamos dependencias 
const { Router } = require('express');
const dogsRouter =  Router();
//  importamos las funciones handlers 
const {getDogsHandler, getDogsByIdHandler, getDogsByNameHandler} = require("../handlers/dogsHandler");
const { getDogsByName } = require('../controller/getDogsByName');
const { postDogsHandler } = require('../handlers/postDogsHandler');

// definimos los endpoint y los handler
dogsRouter.get("/dogs", getDogsHandler);
dogsRouter.get("/dogs/:idRaza", getDogsByIdHandler);
dogsRouter.get("/dogs/search/name", getDogsByNameHandler);

dogsRouter.post('/dogs', postDogsHandler)

// exportamos   
module.exports = dogsRouter;