const express = require('express');
const router = express.Router();

const entryController = require('../controller/entryController');
const showEntry = require('../controller/entryController');
router.post('/',entryController);
router.get('/:id',showEntry)
module.exports = router;
