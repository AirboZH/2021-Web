const express = require("express");
const app = express();
const db = require("./db");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = {
    app,
    db,
};
<<<<<<< HEAD
// import express from 'express'
// import db from './db'
// import bcrypt from 'bcryptjs'
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
=======
>>>>>>> origin/yun
