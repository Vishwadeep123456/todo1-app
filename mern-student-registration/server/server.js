const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/schoolDB')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/students', studentRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
