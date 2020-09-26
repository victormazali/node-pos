const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer-controller')

//Rotas para customer
//Post=> localhost:3000/api/produtos
router.post('/', customerController.post);

//Get=> localhost:3000/api/produtos
router.get('/', customerController.getAll);

//GetById=> localhost:3000/api/produtos/ID
router.get('/:customerId', customerController.getById);

module.exports = router;
