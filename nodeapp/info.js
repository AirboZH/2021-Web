const {app,db} = require("./config")

app.post("/info",async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type, Authorization"
    );
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    let data=req.body;
    const model=db.Web.findOne({where:data.account})
    if(data.account){
        model.account=data.account
    }
    if(data.sex){
        model.sex=data.sex
    }
    if(data.signature){
        model.signature=data.signature
    }
    (await model).save();
    (await model).reload();
    res.send({
        "code": 0,
        "message": "修改用户信息成功",
        "data": {
            "account":model.account,
            "signature":model.signature,
            "sex":model.sex,
            "age":model.age,
            "email":model.email
        }
    })
})