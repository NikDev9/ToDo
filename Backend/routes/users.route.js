const router = require('express').Router();

const {
  findAll,
} = require('../controllers/users.controller');

router.get('/', findAll);

module.exports = router;