const {sequelize,DataTypes} = require("./dao.js")

const Web = sequelize.define(
  "Web",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    account: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: "account",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "email",
    },
    signature: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    sex: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Web",
  }
);

Web.sync({ alter: true });
module.exports={
    Web
}
