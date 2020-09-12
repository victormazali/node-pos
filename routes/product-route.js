const express = require('express');
const router = express.Router();
const Produto = require('../app/models/product');
const Category = require('../app/models/category');
//const mongoose = require('mongoose');

//Rotas para produto
//Post=> localhost:3000/api/produtos
router.post('/', function (req, res){
  const category = new Category();
  category.descricao = req.body.category.description;
  category.save();

  const produto = new Produto();
  produto.nome = req.body.nome;
  produto.preco = req.body.preco;
  produto.descricao = req.body.descricao;
  produto.category = category;

  produto.save(function(error){
    if (error)
      res.send("Erro ao tentar salvar", error);

    res.status(201).json({message: 'Produto inserido com sucesso'});
  });
});

//Get=> localhost:3000/api/produtos
router.get('/', function(req, res){
  Produto.find(function(err, prods){
    if(err)
      res.send(err);

    res.status(200).json({
      message: "retorno ok de todos os produtos",
      allProducts: prods
    });
  });
});

//GetById=> localhost:3000/api/produtos/ID
router.get('/:productId', function(req, res){
  const id = req.params.productId;
  Produto.findById(id, function(err, produto){
    if (err) {
      res.status(500).json({
        message: "Erro ao tentar encontrar produto"
      });
    }else if (produto == null) {
      res.status(400).json({
        message: "produto não encontrado"
      })
    }else {
      res.status(200).json({
        message: "retorno ok do produto",
        Produto: produto
      });
    }
  });
});

//Put=> localhost:3000/api/produtos/ID
router.put('/:productId', function(req, res){
  const id = req.params.productId;
  Produto.findById(id, function(err, produto){
    if (err) {
      res.status(500).json({
        message: "Erro ao tentar encontrar produto"
      });
    }else if (produto == null) {
      res.status(400).json({
        message: "produto não encontrado"
      })
    }else {
      produto.nome = req.body.nome;
      produto.preco = req.body.preco;
      produto.descricao = req.body.descricao;

      produto.save(function(error){
        if(error)
          res.send("Erro ao tentar atualizar", error);

        res.status(200).json({ //204
          message: 'Produto atualizado com sucesso',
          Produto: produto
        });
      });
    }
  });
});

//Delete=> localhost:3000/api/produtos/ID
router.delete('/:productId', function(req, res){
  Produto.findByIdAndRemove(req.params.productId, (err, produto) => {
    if (err)
      res.status(500).send("Erro ao deletar", err)

    const response = {
      message: "Produto removido com sucesso",
      id: produto.id
    }

    return res.status(200).send(response);
  });
});

module.exports = router;