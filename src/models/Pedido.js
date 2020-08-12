const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PedidoSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    valorTotal: {
        type: Number,
        required: true,
    },
    totalItens: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: 0
    },
    itensPedido: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

PedidoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pedido', PedidoSchema);