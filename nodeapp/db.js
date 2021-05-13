const { sequelize, DataTypes } = require("./dao.js")

const Web = sequelize.define(
    "Web", {
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
        password: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        sex: {
            type: DataTypes.STRING(6),
            defaultValue: "男",
            allowNull: true,
        },
        age: {
            type: DataTypes.INTEGER(3),
            allowNull: true,
            defaultValue: 0,
        },
    }, {
        sequelize,
        modelName: "Web",
    }
);

Web.sync();
module.exports = {
    Web
}