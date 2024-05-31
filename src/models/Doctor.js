const db = require('../database');

const Doctor = {};

Doctor.getAll = (callback) => {
    db.query('SELECT * FROM doctors', callback);
};

Doctor.getById = (id, callback) => {
    db.query('SELECT * FROM doctors WHERE id = ?', [id], callback);
};

Doctor.create = (doctor, callback) => {
    db.query('INSERT INTO doctors SET ?', doctor, callback);
};

Doctor.update = (id, doctor, callback) => {
   db.query('UPDATE doctors SET person_id = ?', [doctor, id], callback);
};

Doctor.delete = (id, callback) => {
    db.query('DELETE FROM doctors WHERE id = ?', [id], callback);
};

module.exports = Doctor;
