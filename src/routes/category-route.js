const express = require('express');
const router = express.Router();
const Category = require('../app/models/category');
//const mongoose = require('mongoose');

//Rotas para category
//Post=> localhost:3000/api/category
router.post('/', function (req, res){
  const category = new Category();
  category.descricao = req.body.descricao;

  category.save(function(error){
    if (error)
      res.send("Erro ao tentar salvar", error);

    res.status(201).json({message: 'Categoria inserido com sucesso'});
  });
});

//Get=> localhost:3000/api/category
router.get('/', function(req, res){
  Category.find(function(err, categories){
    if(err)
      res.send(err);

    res.status(200).json({
      message: "retorno ok de todos as categorias",
      allProducts: categories
    });
  });
});

//GetById=> localhost:3000/api/category/ID
router.get('/:categoryId', function(req, res){
  const id = req.params.categoryId;
  Category.findById(id, function(err, category){
    if (err) {
      res.status(500).json({
        message: "Erro ao tentar encontrar category"
      });
    }else if (category == null) {
      res.status(400).json({
        message: "category não encontrado"
      })
    }else {
      res.status(200).json({
        message: "retorno ok do category",
        Categoria: category
      });
    }
  });
});

//Put=> localhost:3000/api/category/ID
router.put('/:categoryId', function(req, res){
  const id = req.params.categoryId;
  Produto.findById(id, function(err, category){
    if (err) {
      res.status(500).json({
        message: "Erro ao tentar encontrar categoria"
      });
    }else if (category == null) {
      res.status(400).json({
        message: "category não encontrado"
      })
    }else {
      category.descricao = req.body.descricao;

      category.save(function(error){
        if(error)
          res.send("Erro ao tentar atualizar", error);

        res.status(200).json({ //204
          message: 'Categoria atualizado com sucesso',
          Categoria: category
        });
      });
    }
  });
});

//Delete=> localhost:3000/api/category/ID
router.delete('/:categoryId', function(req, res){
  Category.findByIdAndRemove(req.params.categoryId, (err, category) => {
    if (err)
      res.status(500).send("Erro ao deletar", err)

    const response = {
      message: "Categoria removida com sucesso",
      id: category.id
    }

    return res.status(200).send(response);
  });
});

module.exports = router;