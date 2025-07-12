// routes/upload.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Set up multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post('/', upload.single('file'), (req, res) => {
  if (!req.file) {
    const error = new Error("No file uploaded");
    error.status = 400;
    throw error;
  }

  res.json({
    message: 'File uploaded successfully!',
    file: req.file.filename
  });
});

module.exports = router;
