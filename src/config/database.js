require("dotenv").config();
const database = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST ,
  port: process.env.DB_PORT ,
  dialect: process.env.DB_DIALECT,
};

module.exports = database;
