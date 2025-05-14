const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.post('/', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json({ message: 'Student Registered' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
