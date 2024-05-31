const db = require('../database');

const MedicalSpeciality = {};

MedicalSpeciality.getAll  = (callback) => {
    db.query('SELECT * FROM medical_speciality', callback);
};

MedicalSpeciality.getById  = (id, callback) => {
    db.query('SELECT * FROM medical_speciality WHERE id = ?', [id], callback);
};

MedicalSpeciality.create = (medicalSpeciality, callback) => {
    db.query('INSERT INTO medical_speciality SET ?', medicalSpeciality, callback);
};

MedicalSpeciality.update = (id, medicalSpeciality, callback) => {
    db.query('UPDATE medical_speciality SET id = ?', [medicalSpeciality, id], callback);
};

MedicalSpeciality.delete = (id, callback) => {
    db.query('DELETE FROM medical_speciality WHERE id = ?', [id], callback);
};

module.exports = MedicalSpeciality;
