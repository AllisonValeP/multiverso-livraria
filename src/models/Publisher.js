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
    // Usuario.associate = (models => {
    //     Usuario.hasMany(models.Endereco, { as: "usuario_endereco", foreignKey: 'usuario_id' })
    // })

    return Publisher
};
