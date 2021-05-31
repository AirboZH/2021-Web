const { User } = require("./User");
const { Post } = require("./post");
const { Comment } = require("./comment");
const {sequelize} = require("./dao")

User.hasMany(Post,{
    foreignKey:"account",
    sourceKey:"account",
    onUpdate:"CASCADE",
})
Post.belongsTo(User,{
    foreignKey:"account",
    targetKey:"account",
})

Post.hasMany(Comment,{
    foreignKey:"Post_id",
    sourceKey:"Post_id"
})
Comment.belongsTo(Post,{
    foreignKey:"Post_id",
    targetKey:"Post_id"
})

Post.hasMany(Comment,{
    foreignKey:"account",
    sourceKey:"account"
})
Comment.belongsTo(Post,{
    foreignKey:"account",
    targetKey:"account"
})

sequelize.sync({force:true})