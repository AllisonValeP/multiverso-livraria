module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define(
        'Image', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        original_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        extension: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        filename: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
    },
        {
            tableName: "image",
            underscored: true,
        }
    )
        
        Image.associate = (models  => {
            Image.belongsToMany(models.Product, { 
                as: "product", 
                through: "image_product", 
                foreignKey: 'image_id', 
                otherKey: "product_id", 
                timestamps: false })
      
       
    });

    return Image
};