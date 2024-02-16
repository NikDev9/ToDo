const router = require('express').Router();

const {
  create, findAll, update, deleteById,
} = require('../controllers/tasks.controller');

router.post('/', create);
router.get('/:id', findAll);
router.put('/:id', update);
router.delete('/:id', deleteById);

module.exports = router;