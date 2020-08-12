const Produto = require('../models/Produto')

module.exports = {

    async showAll(req, res) {

        const produtos = await Produto.findAll();

        return res.json(produtos)
    },

    async showIten(req, res){

        const produto = await Produto.findByPk(req.params.id);

        return res.json(produto)
    }

}