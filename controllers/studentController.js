
const Student = require('../models/student');
const Mentor = require('../models/mentor');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);  
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.assignMentor = async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;
    const student = await Student.findById(studentId);
    const mentor = await Mentor.findById(mentorId);

    if (!student || !mentor) {
      return res.status(404).send('Student or Mentor not found');
    }

    student.mentor = mentorId;
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.changeMentor = async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;
    const student = await Student.findById(studentId);
    const mentor = await Mentor.findById(mentorId);

    if (!student || !mentor) {
      return res.status(404).send('Student or Mentor not found');
    }

    student.mentor = mentorId;
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getStudentsByMentor = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const students = await Student.find({ mentor: mentorId });
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPreviousMentor = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate('mentor');
    res.send(student.mentor);
  } catch (error) {
    res.status(500).send(error);
  }
};

