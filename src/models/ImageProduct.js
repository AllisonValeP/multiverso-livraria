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
    // Usuario.associate = (models => {
    //     Usuario.hasMany(models.Endereco, { as: "usuario_endereco", foreignKey: 'usuario_id' })
    // })

    return ImageProduct
};
