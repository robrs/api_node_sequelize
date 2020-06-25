const Produto = require('../models/Produto')

module.exports = {

    async showAll(req, res) {

        const produtos = await Produto.findAll();

        return res.json(produtos)
    }

}