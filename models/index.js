const fs = require('fs');
const path = require('path');
const config = require('../config/Db');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(config);
const db = {};

fs.readdirSync(__dirname)
    .filter (file => {
        return (
            file.indexOf('.') !== 0 &&
            file !== "index.js" &&
            file.slice(-3) === ".js"
        )
    })
    .forEach (file => {
        const model = require(path.join(__dirname, file))(sequelize, DataTypes);
        db[model.name] = model;
    })
Object.keys(db).forEach(model => {
    if(db[model].associate) {
        db[model].associate(db);
    }
})
db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;


