const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

const Usuario = require('../models/User')

module.exports = {

    async login(req, res) {

        const { email, password } = req.body

        const usuario = await Usuario.findOne({ email }).select('+password');

        if (!usuario)
            return res.status(400).send({ error: ' Usuário não encontrado' })

        if (!await bcrypt.compare(password, usuario.password))
            return res.status(400).send({ error: ' Senha inválida' })

        usuario.password = undefined

        const token = jwt.sign({ id: usuario.id }, authConfig.secret, {
            expiresIn: 86400
        })

        res.send({ usuario, token })
    },

}