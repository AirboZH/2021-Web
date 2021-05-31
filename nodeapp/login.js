const { app, db } = require("./config");

app.post("/login", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  let { account, password } = req.body;
  const model = await db.User.findOne({ where: { account } });
  if (!model) {
    res.send({
      status: 101,
      msg: "用户名不存在，请注册",
    });
  }

  const passwordValid = model.password;
  if (passwordValid == password) {
    console.log("登陆成功");
    res.send({
      status: 1,
      msg: "登陆succeed",
      account:model.account
    });
  } else {
    res.send({
      status: 0,
      msg: "登陆失败,密码错误"
    });
    res.end();
  }
});
