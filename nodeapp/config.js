const express = require('express')
const app = express();
const db = require("./db")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

module.exports = {
    app,
    db,
}