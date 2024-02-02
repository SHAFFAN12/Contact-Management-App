const express = require('express');
require('dotenv').config();
const connectDB = require('./db');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json({ extended: false }));

// connect db
connectDB();

// routes
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/contacts', require('./routes/contacts'));

// port
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
