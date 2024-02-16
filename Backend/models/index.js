const Sequelize = require("sequelize");
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOSTNAME,
//   dialect: 'mysql',
//   operatorsAliases: false
// });

const sequelize = new Sequelize('todo', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

console.log('DIALECT', process.env.DB_HOSTNAME);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.tasks = require("./tasks.model.js")(sequelize, Sequelize);

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;