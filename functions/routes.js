const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.get('/reportes', controller.leerTodosReportes);


module.exports = router;