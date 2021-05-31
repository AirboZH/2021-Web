const { app, db } = require("./config");
/**
 * @param account
 * @returns model
 */
app.post("/ps",async(req,res)=>{
    const {account} = req.body;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type, Authorization"
    );
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    const model = await db.Post.findAll({
        where:{
            account
        }
    })
    res.send({
        code:103,
        msg:"已查找所有帖子",
        data:{
            model
        }
    })
})