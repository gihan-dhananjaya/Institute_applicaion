const express = require('express');
const router = express.Router();

const RegistrationController = require('../controllers/RegistrationController')

router.get('/registration-form',RegistrationController.showRegistrationForm);
router.post('/create-registration',RegistrationController.createRegistration);

module.exports = router;