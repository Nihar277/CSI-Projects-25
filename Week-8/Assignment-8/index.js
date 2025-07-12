// app.js
require('dotenv').config();
const express = require('express');
const app = express();
const uploadRoute = require('./routes/upload');
const weatherRoute = require('./routes/weather');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

// Routes
app.use('/api/upload', uploadRoute);
app.use('/api/weather', weatherRoute);

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
