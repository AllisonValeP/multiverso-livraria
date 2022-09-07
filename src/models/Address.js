module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define(
        'Address', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        street: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        number: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        cep: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        complement: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    

    },
        {
            tableName: "address",
            underscored: true,
        }
    )
        Address.associate = (models => {
        Address.belongsTo(models.Address,{
            foreignKey: "user_id",
            as: "address_user",
        });
    })

    return Address
};
