
const express = require('express');
const mongoose = require('./dataBase/db');
const bodyParser = require('body-parser');
const mentorRoutes = require('./routes/mentor');
const studentRoutes = require('./routes/student');

const HTTP_SERVER = express();
const PORT = process.env.PORT || 3000;

HTTP_SERVER.use(bodyParser.json());

HTTP_SERVER.use('/mentors', mentorRoutes);
HTTP_SERVER.use('/students', studentRoutes);

HTTP_SERVER.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





