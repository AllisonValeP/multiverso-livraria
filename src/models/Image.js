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
    // Usuario.associate = (models => {
    //     Usuario.hasMany(models.Endereco, { as: "usuario_endereco", foreignKey: 'usuario_id' })
    // })

    return Image
};