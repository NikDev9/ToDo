require('dotenv').config({ path: '../config.env' });
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
bodyParser = require('body-parser');
const userRouter = require('./routes/users.route');
const taskRouter = require('./routes/tasks.route');
const loginRouter = require('./routes/login.route');

const app = express()
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());

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
app.use('/api/login', loginRouter);