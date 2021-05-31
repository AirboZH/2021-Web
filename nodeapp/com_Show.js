const { app, db } = require("./config");

app.post("/cs",async(req,res)=>{
    const {Post_id} = req.body
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
     res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization");
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    const model = await db.Comment.findAll({
        where:{
            Post_id
        }
    })
    res.send({
        code:104,
        msg:"已成功查找所有评论",
        data:{
            model
        }
    })
})