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
          
        },
        number: {
            type: DataTypes.INTEGER.UNSIGNED,
            
        },
        cep: {
            type: DataTypes.INTEGER.UNSIGNED,
           
        },
        complement: {
            type: DataTypes.STRING(100),
          
        },
        city: {
            type: DataTypes.STRING(100),
           
        },
        state: {
            type: DataTypes.STRING(100),
           
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
        Address.belongsTo(models.User,{
            foreignKey: "user_id",
            as: "user",
        });
    })

    return Address
};
