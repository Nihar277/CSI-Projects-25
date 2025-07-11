const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Access denied. No token.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(400).json({ error: 'Invalid token' });
  }
};

module.exports = auth;
