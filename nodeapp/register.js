const { app, bcrypt, db } = require("./config")
    // const web=require("./db")
app.post("/register", async(req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type, Authorization"
    );
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    var data = req.body;
    console.log(data)
    await db.Web.create({
        account: data.account,
        email: data.email,
        password: data.password
    })
    console.log(data)
    res.end(JSON.stringify(data))
})