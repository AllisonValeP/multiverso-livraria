module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define(
        'Order', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        delivery_tax: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        final_picre: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    },
        {
            tableName: "order",
            underscored: true,
        }
    )
    // Usuario.associate = (models => {
    //     Usuario.hasMany(models.Endereco, { as: "usuario_endereco", foreignKey: 'usuario_id' })
    // })

    return Order
};
