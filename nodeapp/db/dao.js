const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = new Sequelize("web", "root", "mysql123", {
  host: "localhost",
  dialect: "mysql",
});


module.exports={
    DataTypes,
    sequelize,
}