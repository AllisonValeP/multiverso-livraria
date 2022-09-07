module.exports = (sequelize, DataTypes) => {
    const ImageProduct = sequelize.define(
        "ImageProduct", {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        
        image_id: DataTypes.INTEGER.UNSIGNED,
        product_id: DataTypes.INTEGER.UNSIGNED,              

    },
        {
            timestamps: false,
            tableName: "image_product",      
        }
    )
  
    return ImageProduct
};
