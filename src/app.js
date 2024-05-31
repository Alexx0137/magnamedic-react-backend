const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Cargar variables de entorno

// Routes
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const userRoutes = require('./routes/userRoutes');
const medicalSpecialityRoutes = require('./routes/medicalSpecialityRoutes');
const medicalAppointmentRoutes = require('./routes/medicalAppointmentRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/users', userRoutes);
app.use('/api/medical-specialities', medicalSpecialityRoutes);
app.use('/api/medical-appointments', medicalAppointmentRoutes);
app.use('/api/auth', authRoutes); // Utiliza la ruta de autenticación

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use, trying another one...`);
        server.listen(0); // Listen on a random available port
    } else {
        throw err;
    }
});
