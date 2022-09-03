const User = (sequelize, DataTypes) => {
    const user = sequelize.define(
        'User', {
            id: {
                type:DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
              },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            last_name:  {
                type: DataTypes.STRING(100),
                allowNull: false,
            },   
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },  
            password:{
                type: DataTypes.STRING,
                allowNull: false,
            }, 
            is_admin: DataTypes.BOOLEAN,    
         
        }, 
        {
            tableName: "user",
            underscored: true,          
        }
    )
    // Usuario.associate = (models => {
    //     Usuario.hasMany(models.Endereco, { as: "usuario_endereco", foreignKey: 'usuario_id' })
    // })

    return user
};

module.exports = User