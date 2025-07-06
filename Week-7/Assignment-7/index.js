const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const auth = require('./middleware/authMiddleware');

dotenv.config();
const app = express();
app.use(express.json());

// Connect DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

// Routes
app.use('/api/auth', authRoutes);

// Protected Route
app.get('/api/protected', auth, (req, res) => {
  res.json({ message: `Hello user ${req.user.userId}, you have access.` });
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
