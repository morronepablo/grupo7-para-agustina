const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

//Ruta hacia controlador productsController - Todos los productos
router.get('/', productsController.index);

module.exports = router;
