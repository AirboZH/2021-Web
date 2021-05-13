const {app,db,bcrypt} = require("./config")

app.post("/",async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type, Authorization"
    );
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    var data = req.body;
    await db.Web.create({
        account:data.account,
        email:data.email,
        password:bcrypt.hashSync(data.password,32)
    })
    console.log(data)
    res.end(JSON.stringify(data))
})
app.listen(9696, () => {
    console.log("listing 9696")
})