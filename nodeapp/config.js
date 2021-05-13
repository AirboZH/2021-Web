const express = require("express");
const app = express();
const db = require("./db");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enum gender{
//   unknown = 0,
//   male = 1,
//   female = 2,
// }
module.exports = {
    app,
    db,
};
// import express from 'express'
// import db from './db'
// import bcrypt from 'bcryptjs'
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));