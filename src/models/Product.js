module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        'Product', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        stock: DataTypes.INTEGER,
        publisher_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        category_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },

    },
        {
            tableName: "product",
            underscored: true,
        }
    )
    // Usuario.associate = (models => {
    //     Usuario.hasMany(models.Endereco, { as: "usuario_endereco", foreignKey: 'usuario_id' })
    // })

    return Product
};