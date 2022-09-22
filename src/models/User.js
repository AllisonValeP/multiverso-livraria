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
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: '1',
        },

    },
        {
            tableName: "user",
            underscored: true,
        }
    )

    User.associate = (models => {
        User.hasMany(models.Address, {
            foreignKey: 'user_id',
            as: "addresses",
        });

        User.hasMany(models.Order, {
            foreignKey: 'user_id',
            as: "orders",
        })
    })

    return User
};
