const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/userController");
const { loginUser } = require("../controllers/userController");

router.post("/loginUser", loginUser);
router.post("/createuser", createUser);

module.exports = router;
