const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const requireDir = require('require-dir');// facilitador para importar os arquivos de um diretório

const app = express()

app.use(express.json())

app.use(cors())

// iniciando o BD
require('./databaseSql')

require('./dataBaseNoSql')

requireDir('./models');

app.use(routes)

app.listen(4200)    