module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: '0',
        },

    },
        {
            tableName: "user",
            underscored: true,
        }
    )
    // Usuario.associate = (models => {
    //     Usuario.hasMany(models.Endereco, { as: "usuario_endereco", foreignKey: 'usuario_id' })
    // })

    return User
};
