const {app} = require("./config")
const login = require("./login")
const info = require("./info")
const register = require("./register")

app.listen(9696, () => {
    console.log("listing 9696")
})