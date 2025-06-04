const express = require("express");

const router = express.Router();
const loginController = require("../controller/loginController")
const registerController = require("../controller/registerController")
router.post("/login",loginController);
router.post("/register",registerController);

module.exports = router