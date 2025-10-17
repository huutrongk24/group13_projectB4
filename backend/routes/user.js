const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// ⚙️ Sửa lại route gốc
router.get('/', userController.getUsers);
router.post('/', userController.addUser);

module.exports = router;
