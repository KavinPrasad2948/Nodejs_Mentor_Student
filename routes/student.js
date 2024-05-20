
const express = require('express');
const {
  createStudent,
  assignMentor,
  changeMentor,
  getStudentsByMentor,
  getPreviousMentor,
} = require('../controllers/studentController');

const router = express.Router();

router.post('/', createStudent);
router.post('/assign', assignMentor);
router.post('/change-mentor', changeMentor);
router.get('/mentor/:mentorId', getStudentsByMentor);
router.get('/:studentId/previous-mentor', getPreviousMentor);

module.exports = router;
