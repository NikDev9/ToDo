const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require("dotenv")
const userRouter = require('./routes/users.route');
const taskRouter = require('./routes/tasks.route');

dotenv.config({ path: '../config.env' });

const app = express()
app.use(cors())
app.use(express.json());

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.listen(8082, () => {
    console.log("listening");
})

app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);