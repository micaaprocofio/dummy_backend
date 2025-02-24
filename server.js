require('dotenv').config();
const express = require('express');
const cors = require('cors');

const dummyRoutes = require('./routes/dummyRoutes');

const app = express();
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions)); 
app.use(express.json());

// Rutas
app.use('/api', dummyRoutes);

// Inicia el servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


