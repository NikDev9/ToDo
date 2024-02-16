require('dotenv').config({ path: '../config.env' });
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOSTNAME,
  dialect: process.env.DIALECT,
  operatorsAliases: false
});

// const sequelize = new Sequelize('todo', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
//   operatorsAliases: false
// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.tasks = require("./tasks.model.js")(sequelize, Sequelize);

module.exports = db;