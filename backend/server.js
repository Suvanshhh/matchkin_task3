const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const matchRoutes = require('./routes/matchRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', matchRoutes);

connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
