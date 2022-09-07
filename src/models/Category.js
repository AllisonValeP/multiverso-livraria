module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        'Category', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
        {
            timestamps: false,
            tableName: "category",
          
        }
    )
  
    Category.associate = (models => {
        Category.hasMany(models.Product, { 
            foreignKey: 'category_id',
            as: "category_products", 
            })
        })
    return Category
};
