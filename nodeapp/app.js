const { app } = require("./config")
const login = require("./login")
const info = require("./info")
const register = require("./register.js")
const db = require("./db/db.js")
const pw = require("./post_write")
const cw = require("./com_write")

app.listen(9696, () => {
    console.log("listing 9696")
})