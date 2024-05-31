const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.getUserByEmail(email);
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({
                message: 'Usuario autenticado exitosamente',
                token
            });
        } else {
            res.status(401).json({ message: 'Email o contraseña incorrectos' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error al obtener los usuarios', error: err });
        } else {
            res.json({
                message: 'Usuarios obtenidos exitosamente',
                users: results
            });
        }
    });
};

exports.getUserById = (req, res) => {
    const id = req.params.id;
    User.getById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results[0]);
        }
    });
};

exports.createUser = (req, res) => {
    const newUser = req.body;
    User.create(newUser, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error al crear el usuario', error: err });
        } else {
            res.json({
                message: 'Usuario creado exitosamente',
                user: { id: results.insertId, ...newUser }
            });
        }
    });
};


exports.updateUser = (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    User.update(id, updatedUser, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ id, ...updatedUser });
        }
    });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.delete(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: 'usuario eliminado exitosamente' });
        }
    });
};
