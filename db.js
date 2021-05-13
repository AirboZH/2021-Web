const {Sequelize,DataTypes,Op} = require("sequelize")
const sequelize = new Sequelize("web","root","mysql123",{
    host: "localhost",
    dialect: "mysql",
});


const Web= sequelize.define(
    "Web",
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        account:{
            type:DataTypes.STRING(16),
            allowNull:false,
            unique:"account"
        },
        signature:{
            type:DataTypes.STRING(200),
            allowNull:true
        },
        sex:{
            type:DataTypes.BOOLEAN,
            defaultValue:0,
            allowNull:false
        },
        birthday:{
            type:DataTypes.DATE,
            allowNull:true
        }

    },
    {
        sequelize,
        modelName:"Web"
    }
);

Web.sync();
module.exports.Web=Web;