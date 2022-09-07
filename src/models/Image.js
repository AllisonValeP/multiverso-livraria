module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define(
        'Image', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        pach: {
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
    },
        {
            tableName: "image",
            underscored: true,
        }
    )
        
        Image.associate = (models  => {
            Image.belongsToMany(models.Product, {
                foreignKey: 'product_id',
                as: 'product_image',
                through:"ImageProduct",
        })
       
    });

    return Image
};