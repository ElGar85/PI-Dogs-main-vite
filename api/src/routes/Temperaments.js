// destructuramos el router de express
const { Router } = require('express');
const temperamentsRouter =  Router();
const { temperamentsHandler } = require('../handlers/temperamentsHandler');

//  importamos los controlles 
temperamentsRouter.get('/temperaments', temperamentsHandler)

module.exports = temperamentsRouter; 