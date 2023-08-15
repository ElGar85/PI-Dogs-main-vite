const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require('./Dogs')
const temperamentsRouter = require('./Temperaments')

const router = Router();
  
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', dogsRouter) 
router.use('/', temperamentsRouter)

module.exports = router;
