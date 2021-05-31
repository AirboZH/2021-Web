const { app, db } = require("./config");

app.post("/cw", async (req, res) => {
  const { account, content, Post_id } = req.body;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  model = await db.Comment.create({
      account:account,
      content:content,
      Post_id:Post_id
  })
  res.send({
      code:102,
      msg:"评论创建成功",
      data:{
        account:account,
        content:content,
        Post_id:Post_id
      }
  })
});
