module.exports = (sequelize, DataTypes) => {
    const Publisher = sequelize.define(
        'Publisher', {
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
            tableName: "publisher",
          
        }
    )

    Publisher.associate = (models => {
    Publisher.hasMany(models.Product, { 
        foreignKey: 'publisher_id',
        as: "publisher_products", 
        })
    })

    return Publisher
};
