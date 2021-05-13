const express = require('express')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type, Authorization"
    );
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    var data = req.body
    console.log(data)
    res.end(JSON.stringify(data))
})
app.listen(9696, () => {
    console.log("listing 9696")
})