const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = new Sequelize("2021-web", "airbo", "F8HnKrLehEiNZCMb", {
    host: "8.131.49.251",
    dialect: "mysql",
});


module.exports = {
    DataTypes,
    sequelize,
}