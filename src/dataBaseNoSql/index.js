const mongoose = require('mongoose')

mongoose.connect(
    'mongodb://localhost:27017/ecomm',
    { useNewUrlParser:true, useFindAndModify: false}
)

module.exports = mongoose