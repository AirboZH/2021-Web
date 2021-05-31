const {sequelize,DataTypes} = require("./dao.js");
const { User } = require("./User.js");

const Post = sequelize.define(
    "Post",
    {
        Post_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        account:{
            type:DataTypes.STRING(16),
            allowNull:false,
            references:{
                model:User,
                key:"account",
            }
        },
        title:{
            type:DataTypes.STRING(60),
            allowNull:false,   
        },
        article:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    },
    {
        sequelize,
        modelName:"Post"
    }
);
module.exports={
    Post
}
