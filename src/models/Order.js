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
        Order.associate = (models => {
            Order.belongsTo(models.User, {
                foreignKey: "user_id",
                as: "order_user",

            });
            Order.belongsToMany(models.Product, {
                foreignKey: 'product_id',
                as: 'product_order',
                through: "OrderProduct",
            })
        })

    return Order
};
