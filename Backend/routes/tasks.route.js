const router = require('express').Router();

const {
  findAll,
} = require('../controllers/tasks.controller');

router.get('/', findAll);

module.exports = router;