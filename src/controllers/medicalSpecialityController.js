const MedicalSpeciality = require('../models/MedicalSpeciality');

exports.getAllMedicalSpecialities = (req, res) => {
    console.log('Fetching all medical specialities');
    MedicalSpeciality.getAll((err, results) => {
        if (err) {
            console.error('Error fetching medical specialities:', err);
            res.status(500).send(err);
        } else {
            console.log('Medical speciality fetched successfully');
            res.json(results);
        }
    });
};

exports.getMedicalSpecialityById = (req, res) => {
    const id = req.params.id;
    MedicalSpeciality.getById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results[0]);
        }
    });
};

exports.createMedicalSpeciality = (req, res) => {
    const newMedicalSpeciality = req.body;
    MedicalSpeciality.create(newMedicalSpeciality, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ id: results.insertId, ...newMedicalSpeciality });
        }
    });
};

exports.updateMedicalSpeciality = (req, res) => {
    const id = req.params.id;
    const updatedMedicalSpeciality = req.body;
    MedicalSpeciality.update(id, updatedMedicalSpeciality, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ id, ...updatedMedicalSpeciality });
        }
    });
};

exports.deleteMedicalSpeciality = (req, res) => {
    const id = req.params.id;
    MedicalSpeciality.delete(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: 'Medical speciality deleted successfully' });
        }
    });
};