const MedicalAppointment = require('../models/MedicalAppointment');

exports.getAllMedicalAppointments = (req, res) => {
    console.log('Fetching all medical appointments');
    MedicalAppointment.getAll((err, results) => {
        if (err) {
            console.error('Error fetching medical appointments:', err);
            res.status(500).send(err);
        } else {
            console.log('Patients fetched successfully');
            res.json(results);
        }
    });
};


exports.getMedicalAppointmentById = (req, res) => {
    const id = req.params.id;
    MedicalAppointment.getById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results[0]);
        }
    });
};


exports.createMedicalAppointment = (req, res) => {
    const newMedicalAppointment = req.body;
    MedicalAppointment.create(newMedicalAppointment, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ id: results.insertId, ...newMedicalAppointment });
        }
    });
};
exports.updateMedicalAppointment = (req, res) => {
    const id = req.params.id;
    const updatedMedicalAppointment = req.body;
    MedicalAppointment.update(id, updatedMedicalAppointment, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ id, ...updatedMedicalAppointment });
        }
    });
};

exports.deleteMedicalAppointment = (req, res) => {
    const id = req.params.id;
    MedicalAppointment.delete(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: 'Medical appointment deleted successfully' });
        }
    });
};