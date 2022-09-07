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
    

    return OrderProduct
};
