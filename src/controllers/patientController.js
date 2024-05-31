const Patient = require('../models/Patient');

exports.getAllPatients = (req, res) => {
    const { identification } = req.query;

    if (identification) {
        Patient.findByIdentification(identification, (err, results) => {
            if (err) {
                console.error('Error listando paciente por identificación:', err);
                res.status(500).send(err);
            } else {
                res.json(results);
            }
        });
    } else {
        Patient.getAll((err, results) => {
            if (err) {
                res.status(500).json({ message: 'Error al obtener los pacientes', error: err });
            } else {
                res.json({
                    message: 'Pacientes obtenidos exitosamente',
                    users: results
                });            }
        });
    }
};

exports.getPatientById = (req, res) => {
    const id = req.params.id;
    Patient.getById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results[0]);
        }
    });
};

exports.createPatient = (req, res) => {
    const newPatient = req.body;
    Patient.create(newPatient, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error al crear el paciente', error: err });
        } else {
            res.json({
                message: 'Paciente creado exitosamente',
                patient: { id: results.insertId, ...newPatient }
            });
        }
    });
};

exports.updatePatient = (req, res) => {
    const id = req.params.id;
    const updatedPatient = req.body;
    Patient.update(id, updatedPatient, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: 'Paciente actualizado exitosamente' });
        }
    });
};

exports.deletePatient = (req, res) => {
    const id = req.params.id;
    Patient.delete(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: 'Paciente eliminado exitosamente' });
        }
    });
};