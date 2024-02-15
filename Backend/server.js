const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require("dotenv")

dotenv.config({ path: '../config.env' });

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

app.listen(8082, () => {
    console.log("listening");
})