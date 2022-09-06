module.exports = (sequelize, DataTypes) => {
    const OrderProduct = sequelize.define(
        'OrderProduct ', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        
        order_id: DataTypes.INTEGER.UNSIGNED,
        product_id: DataTypes.INTEGER.UNSIGNED,
              

    },
        {
            timestamps: false,
            tableName: "order_product",      
        }
    )
    // Usuario.associate = (models => {
    //     Usuario.hasMany(models.Endereco, { as: "usuario_endereco", foreignKey: 'usuario_id' })
    // })

    return OrderProduct
};
