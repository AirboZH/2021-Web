const { sequelize, DataTypes } = require("./dao.js");
const { Post } = require("./post.js");
const { User } = require("./User.js");

const Comment = sequelize.define(
    "Comment",
    {
        Comment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        account:{
            type:DataTypes.STRING(16),
            allowNull:false,
            references:{
                model:User,
                key:"account",
            }
        },
        content:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        Post_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:Post,
                key:"Post_id"
            }
        }
    },
    {
        sequelize,
        modelName:"Comment",
        updatedAt:false
    }

);

module.exports={
    Comment
}