module.exports=(sequelize,DataTypes) => {
    console.log('DATATYPES :', DataTypes.UUID)
    const Dechets = sequelize.define("Dechets", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID,
            primaryKey: true
        },
        categorie:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dechets: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        infoCollecte: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    Dechets.associate = (models) => {
        Dechets.hasMany(models.Poubelles, {
            foreignKey: "id_poubelles",
            as: "Poubelles",
        })
    }

    return Dechets;
};