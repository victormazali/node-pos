const express = require('express');
const router = express.Router();
const Produto = require('../app/models/product');

//Middleware
router.use(function(req, res, next){
  console.log("Interceptação pelo Middleware"); //Logs, Validações, Autenticação
  next();
});

router.get('/', (req, res) => res.send("rota teste ok"));

module.exports = router;