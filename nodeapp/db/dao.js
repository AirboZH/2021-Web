const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = new Sequelize("web", "airbo", "ZHANGbo020329", {
    host: "localhost",
    dialect: "mysql",
});


module.exports = {
    DataTypes,
    sequelize,
}