const express = require("express");
const app = express();
const db = require("./db/db.js");
const bcrypt = require("bcryptjs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = {
  app,
  db,
  bcrypt,
};
