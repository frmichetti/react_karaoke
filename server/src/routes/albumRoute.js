const express = require('express');
const router = express.Router();
const controller = require('../controllers/albumController');

router.get('/', controller.get);
router.get('/search', controller.search);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;