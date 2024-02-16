const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

//Create and Save a new User
exports.create = (req, res) => {

  //Validate request
  if (!req.body.email || !req.body.name || !req.body.password) {
    res.status(400).send({
      message: "No field can be empty!"
    });
    return;
  }

  //Save User in the database
  User.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
};

exports.deleteById = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { user_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
};