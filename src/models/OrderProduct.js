module.exports = (sequelize, DataTypes) => {
    const OrderProduct = sequelize.define(
        'OrderProduct', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },       

        order_id: {
            type: DataTypes.INTEGER.UNSIGNED,           
        },
        product_id: {
            type: DataTypes.INTEGER.UNSIGNED,           
        },
    },
        {
            tableName: "order_product",
            timestamps: false,
        }
    )
        
        
        return OrderProduct
    };
    
   