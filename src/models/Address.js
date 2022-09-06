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
    // Usuario.associate = (models => {
    //     Usuario.hasMany(models.Endereco, { as: "usuario_endereco", foreignKey: 'usuario_id' })
    // })

    return Address
};
