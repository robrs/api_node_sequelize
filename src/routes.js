const express = require('express')

const authMiddleware = require('./middlewares/auth')

const routes = express.Router()

const ProdutoController = require('./controllers/ProdutoController')
const RegisterController = require('./controllers/RegisterController')
const AuthController = require('./controllers/AuthController')


// rotas de produtos
routes.get('/produtos', ProdutoController.showAll);
routes.get('/produto/:id?',ProdutoController.showIten)

// cadastro de um novo usuário
routes.post('/register',RegisterController.store)

// rota de login
routes.post('/auth',AuthController.login)


//rotas privadas

routes.use(authMiddleware)
// rotas de pedidos
const PedidoController = require('./controllers/PedidoController')
routes.get('/pedidos',PedidoController.showAll)
routes.get('/pedido/:id?',PedidoController.showIten)
routes.post('/pedido',PedidoController.store)
routes.put('/pedido/:id?',PedidoController.update)
routes.get('/pedidos-cliente/:userId?',PedidoController.showByUser)

module.exports = routes;