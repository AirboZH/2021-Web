const { app, db } = require("./config");
/**
 * @returns model
 */
app.post("/pa",async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type, Authorization"
    );
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    const model = await db.Post.findAll()
    res.send({
        code:104,
        msg:"已查找所有帖子",
        data:{
            model
        }
    })
})