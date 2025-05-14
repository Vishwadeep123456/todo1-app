const express = require('express');
const router = express.Router();
const { registerStudent } = require('../controllers/studentController');

router.post('/', registerStudent);

module.exports = router;
