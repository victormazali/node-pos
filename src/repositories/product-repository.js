const Produto = require('../app/models/product');

// Post
exports.post = async(data) => {
  const produto = new Produto(data);
  await produto.save();
}

// GetAall
exports.getAll = async () => {
  const res = await Produto.find();
  return res;
}

// GetById
exports.getById = async (id) => {
  const res = await Produto.findById(id);
  return res;
}

// Put
exports.put = async (id, data) => {
  await Produto.findByIdAndUpdate(id, {
    $set:{
      nome: data.nome,
      preco: data.preco,
      descricao: data.descricao
    }
  });
}

// Delete
exports.delete = async (id) => {
  await Produto.findByIdAndDelete(id);
}
