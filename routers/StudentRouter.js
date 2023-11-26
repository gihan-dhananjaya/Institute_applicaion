const express = require('express');
const router = express.Router();

const StudentController = require('../controllers/StudentController');

router.get('',StudentController.initializeUi);
router.get('/student-show-page',StudentController.showStudent);
router.get('/student-add-page',StudentController.addStudent);
router.post('/create-new-student',StudentController.createNewStudent);
router.get('/update-student-page/:id',StudentController.updateStudent);
router.post('/modify-student-page',StudentController.modifyStudent);
router.get('/delete-student-page/:id',StudentController.deletestudent);
router.get('/show-data-page/:id',StudentController.showStudentData);


module.exports = router;