const { sequelize, DataTypes } = require("./dao.js")

const User = sequelize.define(
    "User", {
        User_id: {
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
            type: DataTypes.TEXT,
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
        modelName: "User",
    }
);

module.exports = {
    User
}