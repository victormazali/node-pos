const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
  nome: String,
  preco: Number,
  descricao: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  }
});

module.exports = mongoose.model('Produto', produtoSchema);