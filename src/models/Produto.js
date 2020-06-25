const {Model, DataTypes} = require('sequelize')

class Produto extends Model {
    static init(sequelize){
        super.init({
            nome:DataTypes.STRING,
            descricao:DataTypes.STRING,
            foto: DataTypes.STRING,
            publicado: DataTypes.STRING,
            preco:DataTypes.FLOAT,
            categoria_id: DataTypes.INTEGER
        },{
        sequelize
        })
    }
}

module.exports = Produto