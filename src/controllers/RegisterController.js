const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

const Usuario = require('../models/User')

module.exports = {

    async store(req, res) {
        
        const { email } = req.body

        try {

            if (await Usuario.findOne({ email }))
                return res.status(400).send({ error: "E-mail Já existe" })

            const usuario = await Usuario.create(req.body);

            usuario.password = undefined

            const token = jwt.sign({ id: usuario.id }, authConfig.secret, {
                expiresIn: 86400
            })

            return res.send({ usuario, token })

        } catch (err) {
            return res.status(400).send({ error: "Cadastro Falhou" })
        }


    },

}