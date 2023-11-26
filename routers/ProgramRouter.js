const express = require('express');
const router = express.Router();

const ProgarmController = require('../controllers/ProgramController');

router.get('/show-all-programs',ProgarmController.showAllProgram);
router.get('/update-program-page/:id',ProgarmController.updateProgram);
router.post('/modify-program-page',ProgarmController.modifyProgram);
router.get('/delete-program-page/:id',ProgarmController.deleteProgram);
router.get('/show-program-data-page/:id',ProgarmController.showProgarmData);
router.get('/add-program-page',ProgarmController.addProgram);
router.post('/create-program-page',ProgarmController.createProgram);
router.post('/find-program',ProgarmController.findProgram);

module.exports = router;