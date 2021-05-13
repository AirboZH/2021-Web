const {app,db,bcrypt} = require("./config")

app.post("/login",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type, Authorization"
    );
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    let {account,password} = req.body;
    const model = await db.Web.findOne({where:{account}})
    if(!model){
        
        res.send({
            status:101,
            msg:"用户名不存在，请注册"
        })
    }
    const passwordValid = bcrypt.compareSync(
        bcrypt.hashSync(password, 32),
        model.dataValues.password
      );
      if (!passwordValid) {
        console.log("登陆成功");
        res.send({
          status: 1,
          msg: "登陆succeed",
          
        });
      } else {
        res.send({ status: 0, des: "登陆失败" });
        res.end();
      }
})