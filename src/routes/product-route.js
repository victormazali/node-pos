const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller')

//Rotas para produto
//Post=> localhost:3000/api/produtos
router.post('/', productController.post);

//Get=> localhost:3000/api/produtos
router.get('/', productController.getAll);

//GetById=> localhost:3000/api/produtos/ID
router.get('/:productId', productController.getById);

//Put=> localhost:3000/api/produtos/ID
router.put('/:productId', productController.put);

//Delete=> localhost:3000/api/produtos/ID
router.delete('/:productId', productController.delete);

module.exports = router;
