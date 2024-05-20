

const express = require('express');
const { createMentor, getMentors } = require('../controllers/mentorController');

const router = express.Router();

router.post('/', createMentor);
router.get('/', getMentors);

module.exports = router;