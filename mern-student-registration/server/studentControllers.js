const Student = require('../models/Student');

const registerStudent = async (req, res) => {
  const { name, email, phone, class: className } = req.body;

  try {
    const student = new Student({ name, email, phone, class: className });
    await student.save();
    res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerStudent };
