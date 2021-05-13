const {app,db} = require("./config")

app.post("/info",async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type, Authorization"
    );
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    let {account,sex,signature,age}=req.body;
    const model=await db.Web.findOne({where:{account}})
    console.log(model.dataValues)
    if(account){
        model.account=account
    }
    if(sex){
        model.sex=sex
    }
    if(signature){
        model.signature=signature
    }
    if(age){
        model.age=age
    }
    (await model).save();
    (await model).reload();
    res.send({
        code: 0,
        message: "修改用户信息成功",
        data: {
            account:model.account,
            signature:model.signature,
            sex:model.sex,
            age:model.age,
            email:model.email
        }
    })
})
