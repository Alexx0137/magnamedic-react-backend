const Doctor = require('../models/Doctor');

exports.getAllDoctors = async (req, res) => {
    console.log('Fetching all doctors');
    Doctor.getAll((err, results) => {
        if (err) {
            console.error('Error fetching doctors:', err);
            res.status(500).send(err);
        } else {
            console.log('Patients fetched successfully');
            res.json(results);
        }
    });
};

exports.getDoctorById = async (req, res) => {
    const id = req.params.id;
    Doctor.getById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results[0]);
        }
    });
};

exports.createDoctor = async (req, res) => {
    const newDoctor = req.body;
    Doctor.create(newDoctor, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ id: results.insertId, ...newDoctor });
        }
    });
};

exports.updateDoctor = async (req, res) => {
    const id = req.params.id;
    const updatedDoctor = req.body;
    Doctor.update(id, updatedDoctor, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ id, ...updatedDoctor });
        }
    });
};

exports.deleteDoctor = async (req, res) => {
    const id = req.params.id;
    Doctor.delete(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: 'Doctor deleted successfully' });
        }
    });
};