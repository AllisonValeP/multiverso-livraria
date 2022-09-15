module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        'Product', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        stock: DataTypes.INTEGER,
        publisher_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        category_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },

    },
        {
            tableName: "product",
            underscored: true,
        }
    )
    Product.associate = (models => {
        Product.belongsTo(models.Publisher,{
            foreignKey: "publisher_id",
            as: "publisher",
        });
        Product.belongsTo(models.Author, {
            foreignKey: "author_id",
            as: "author",
        });
        Product.belongsTo(models.Category, {
            foreignKey: "category_id",
            as: "category",
        });
        
        Product.belongsToMany(models.Image, { 
            as: "image", 
            through: "image_product", 
            foreignKey: 'product_id', 
            otherKey: "image_id", 
            timestamps: false })

          Product.belongsToMany(models.Order, {
            foreignKey: 'order_id',
            as: 'order_product',
            through: "OrderProduct",
            
          });

    })

    return Product
};
