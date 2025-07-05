const express = require('express');
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { showController } = require('../controller/showController');
const { entryController } = require('../controller/entryController');

router.post('/',authMiddleware,entryController);

router.get('/showentry',authMiddleware,showController)

module.exports = router;
