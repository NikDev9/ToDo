const db = require("../models");
const Task = db.tasks;
const Op = db.Sequelize.Op;

//Create and Save a new Task
exports.create = (req, res) => {
  //Validate request
  if (!req.body.task_name) {
    res.status(400).send({
      message: "Task can not be empty!"
    });
    return;
  }

  //Save Task in the database
  Task.create(req.body)
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
    const id = req.params.id;

    Task.findAll({where: { user_id: id }})
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

//Update a task
exports.update = (req, res) => {
  const id = req.params.id;

  Task.update(req.body, {
    where: { task_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Task was updated successfully!"
        });
      } else {
        res.send({
          message: `Cannot update Task with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Task with id=" + id
      });
    });
};

//Delete a specific task for a user
exports.deleteById = (req, res) => {
  const id = req.params.id;

  Task.destroy({
    where: { task_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Task was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Task with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Task with id=" + id
      });
    });
};