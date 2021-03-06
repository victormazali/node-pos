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
const productRoute = require('./src/routes/product-route');
const indexRoute = require('./src/routes/index-route');
const categoryRoute = require('./src/routes/category-route');
const customerRoute = require('./src/routes/customer-route');
const logRoute = require('./src/routes/log-route');
const authRoute = require('./src/routes/auth-route')

//VIncular a aplicação (app) com o motor de rotas
// '/api' é o caminho padrão para as APIs REST
//rota principal
app.use('/api', indexRoute);

//rota para produto
app.use('/api/produtos/', productRoute);
app.use('/api/categorias/', categoryRoute);
app.use('/api/customers/', customerRoute);
app.use('/api/logs/', logRoute);
app.use('/api/auths/', authRoute)

app.listen(port, () => {
  console.log("server is up and running...on port ". port);
});
