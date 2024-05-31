const express = require('express');
const router = express.Router();
const medicalAppointmentController = require('../controllers/medicalAppointmentController');

router.get('/', medicalAppointmentController.getAllMedicalAppointments);
router.get('/:id', medicalAppointmentController.getMedicalAppointmentById);
router.post('/', medicalAppointmentController.createMedicalAppointment);
router.put('/:id', medicalAppointmentController.updateMedicalAppointment);
router.delete('/:id', medicalAppointmentController.deleteMedicalAppointment);

module.exports = router;
