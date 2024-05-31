const db = require('../database');

const  MedicalAppointment = {};

MedicalAppointment.getAll = (callback) => {
   db.query('SELECT * FROM medical_appointments', callback);
};

MedicalAppointment.getById = (id, callback) => {
   db.query('SELECT * FROM medical_appointments WHERE id = ?', [id], callback);
};

MedicalAppointment.create = (medicalAppointment, callback) => {
   db.query('INSERT INTO medical_appointments SET ?', medicalAppointment, callback);
};

MedicalAppointment.update = (id, medicalAppointment, callback) => {
    db.query('UPDATE medical_appointments SET ?  WHERE id = ?', [medicalAppointment, id], callback);
};

MedicalAppointment.delete = (id, callback) => {
    db.query('DELETE FROM medical_appointments WHERE id = ?', [id], callback);
};

module.exports = MedicalAppointment;