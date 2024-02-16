const db = require("../models");
const Task = db.tasks;
const Op = db.Sequelize.Op;

//Create and Save a new User
exports.create = (req, res) => {
  //Validate request
  if (!req.body.task) {
    res.status(400).send({
      message: "Task can not be empty!"
    });
    return;
  }

  //Create a Task
  const task = {
    task_id: req.body.task_id,
    task_name: req.body.task,
    user_id: req.body.user_id
  };

  //Save Task in the database
  Task.create(task)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Task."
      });
    });
};

// Retrieve all Tasks from the database for a specific user_id.
exports.findAll = (req, res) => {
    Task.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tasks."
        });
      });
};

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
  
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
  
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };