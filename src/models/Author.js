module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define(
        'Author', {
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
            tableName: "author",
          
        }
    )
       Author.associate = (models => {
        Author.hasMany(models.Product, { 
            foreignKey: 'author_id',
            as: "author_products", 
            })
        })
    return Author
};
