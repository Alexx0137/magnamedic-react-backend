const db = require('../database');

const Patient = {};

Patient.getAll = (callback) => {
    db.query('SELECT * FROM patients', callback);
};

Patient.getById = (id, callback) => {
    db.query('SELECT * FROM patients WHERE id = ?', [id], callback);
};

Patient.create = (patient, callback) => {
    db.query('INSERT INTO patients SET ?', patient, callback);
};

Patient.update = (id, patient, callback) => {
    db.query('UPDATE patients SET ? WHERE id = ?', [patient, id], callback);
};

Patient.delete = (id, callback) => {
    db.query('DELETE FROM patients WHERE id = ?', [id], callback);
};

Patient.findByIdentification = (identification, callback) => {
    db.query('SELECT * FROM patients WHERE identification = ?', [identification], callback);
};

module.exports = Patient;
