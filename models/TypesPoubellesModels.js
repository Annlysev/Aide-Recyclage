
module.exports = (sequelize, DataTypes) => {
    const Poubelles = sequelize.define('Poubelles', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
        },
        type:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    Poubelles.associate = (models) => {
        Poubelles.belongsTo(models.Dechets, {
            foreignKey: 'id_dechets',
            as : 'Dechets',
        })
    }
    return Poubelles;
}