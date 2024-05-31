const db = require('../database');
const bcrypt = require('bcryptjs');

const User = {};

User.getAll = (callback) => {
    db.query('SELECT * FROM users', callback);
};

User.getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results[0]);
        });
    });
};

User.getById = (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

User.create = (user, callback) => {
    const { identification_type_id, identification, name, last_name, role_id, email, password } = user;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const createdAt = new Date();
    const updatedAt = new Date();
    db.query('INSERT INTO users (identification_type_id, identification, name, last_name, role_id, email, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [identification_type_id, identification, name, last_name, role_id, email, hashedPassword, createdAt, updatedAt],
        callback);
};

User.update = (id, user, callback) => {
    const { identification_type_id, identification, name, last_name, role_id, email, password } = user;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const updatedAt = new Date();
    db.query('UPDATE users SET identification_type_id = ?, identification = ?, name = ?, last_name = ?, role_id = ?, email = ?, password = ?, updated_at = ? WHERE id = ?',
        [identification_type_id, identification, name, last_name, role_id, email, hashedPassword, updatedAt, id],
        callback);
};

User.delete = (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
};

module.exports = User;
