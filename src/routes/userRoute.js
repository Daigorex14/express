const express = require('express');
const router = express.Router();
const userContorller = require('../controllers/userController');

router.post("/register", userContorller.register);
router.post("/login", userContorller.login);

module.exports = router;