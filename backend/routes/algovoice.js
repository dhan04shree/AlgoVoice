const express = require('express');
const router = express.Router();

const entryController = require('../controller/entryController');

router.post('/',entryController);

module.exports = router;
