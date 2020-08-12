const mongoose = require('mongoose');

const Pedido = require('../models/Pedido')

module.exports = {

    async showAll(req, res) {

        const pedidos = await Pedido.find();
        return res.json(pedidos);

    },

    async showIten(req, res) {
        const pedido = await Pedido.findById(req.params.id);
        return res.json(pedido);

    },

    async store(req, res) {
        const pedido = await Pedido.create(req.body);

        return res.json(pedido);
    },

    async update(req, res) {

        const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(pedido);
    },

    async destroy(req, res) {

        await Pedido.findByIdAndRemove(req.params.id);

        return res.send();
    },

    async showByUser(req, res){

        const pedidos = await Pedido.find({userId:req.params.userId});

        return res.json(pedidos)
    }

}