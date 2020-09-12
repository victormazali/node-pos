//Importando pacotes
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Configurar o app para usar o body-parse e transformar as requisições em JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Persistência
const connectionString = "mongodb+srv://posgraduacao123:posgraduacao123@cluster0.saybp.mongodb.net/bdpos?retryWrites=true&w=majority"
mongoose.connect(connectionString, {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false});

//Definir porta onde o server vai responder
const port = process.env.PORT || 3000;

//Definindo as rotas
const router = express.Router(); //intercepta todas as rotas
const productRoute = require('./routes/product-route');
const indexRoute = require('./routes/index-route');
const categoryRoute = require('./routes/category-route');

//VIncular a aplicação (app) com o motor de rotas
// '/api' é o caminho padrão para as APIs REST
//rota principal
app.use('/api', indexRoute);

//rota para produto
app.use('/api/produtos/', productRoute);
app.use('/api/categorias/', categoryRoute);

app.listen(port, () => {
  console.log("server is up and running...on port ". port);
});