const express = require('express');
const router = express.Router();
const medicalSpecialityController = require('../controllers/medicalSpecialityController');

router.get('/', medicalSpecialityController.getAllMedicalSpecialities);
router.get('/:id', medicalSpecialityController.getMedicalSpecialityById);
router.post('/', medicalSpecialityController.createMedicalSpeciality);
router.put('/:id', medicalSpecialityController.updateMedicalSpeciality);
router.delete('/:id', medicalSpecialityController.deleteMedicalSpeciality);

module.exports = router;
