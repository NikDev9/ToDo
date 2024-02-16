const router = require('express').Router();

const {
  create, findAll, deleteById,
} = require('../controllers/users.controller');

router.post('/', create);
router.get('/', findAll);
router.delete('/:id', deleteById);

module.exports = router;