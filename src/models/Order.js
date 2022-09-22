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
                as: "product", 
                through: "order_product", 
                foreignKey: 'order_id', 
                otherKey: "product_id", 
                timestamps: false });
        })
        
        return Order
    };
    
   