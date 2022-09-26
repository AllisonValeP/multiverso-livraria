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
        final_price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        stats: {
            type: DataTypes.STRING(10),
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
                as: "user",
            });
        
            Order.belongsToMany(models.Product, {
                foreignKey: 'order_id',
                as: "orderProduct",
                through: models.OrderProduct });
            })
        
        return Order
    };
    
   