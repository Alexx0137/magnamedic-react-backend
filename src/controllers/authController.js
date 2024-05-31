// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar si el usuario existe
        const user = await User.getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        // Verificar la contraseña
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Generar token JWT
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Si el inicio de sesión es exitoso, devuelve un objeto JSON con el token
        res.json({ token });
    } catch (error) {
        // Si hay un error, devuelve un objeto JSON con un mensaje de error
        res.status(500).json({ message: 'Error en el inicio de sesión' });
    }
};

module.exports = {
    login
};
