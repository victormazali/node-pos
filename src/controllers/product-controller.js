const Category = require('../app/models/category');
const productRepository = require('../repositories/product-repository');
const logRepository = require('../repositories/log-repository')

exports.post = async (req, res) => {
  const category = new Category();
  category.descricao = req.body.category.description;
  category.save();

  try {
    await productRepository.post({
      nome: req.body.nome,
      preco: req.body.preco,
      descricao: req.body.descricao,
      category: category
    });
    await logRepository.create({ message: "Produto criado pelo IP: " + req.ip })

    res.status(201).send({
      message: 'Produto cadastrado com sucesso.'
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: 'Falha ao processar requisição.'
    })
  }
}

exports.getAll = async (req, res) => {
  try {
    const data = await productRepository.getAll();
    res.status(200).send({ count: data.length, data: data });
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar requisição.',
      erro: error
    })
  }
}

exports.getById = async (req, res) => {
  try {
    const id = req.params.productId;
    const data = await productRepository.getById(id);

    if (data) {
      res.status(200).send(data)
    } else {
      res.status(403).send({ message: 'Produto não encotrado' })
    }
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar requisição.',
      erro: error
    })
  }
}

exports.put = async (req, res) => {
  try {
    const id = req.params.productId;
    const data = await productRepository.put(id, req.body);
    res.status(200).send({
      message: 'Produto atualizado com sucesso',
      dados: data
    })
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar requisição.',
      erro: error
    })
 }
}

exports.delete = async (req, res) => {

  try {
    await productRepository.delete(req.params.productId)
    res.status(200).send({
      message: 'Produto removido com sucesso'
    })
  } catch (eroor) {
    res.status(500).send({
      message: 'Falha ao processar requisição.',
      erro: error
    })
  }
}
