const {app} = require("./config")
const login = require("./login")
const info = require("./info")
const register = require("./db/register.js")
const db = require("./db/db.js")

app.listen(9696, () => {
    console.log("listing 9696")
})