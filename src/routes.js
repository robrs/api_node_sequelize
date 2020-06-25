const express = require('express');

const routes = express.Router();

const ProdutoController = require('./controllers/ProdutoController');

routes.get('/', ProdutoController.showAll);

module.exports = routes;