const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const uploadDir = path.join(__dirname, '..', 'public', 'uploads');
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + '-' + Math.round(Math.random()*1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});

const upload = multer({ storage, limits: { fileSize: 2 * 1024 * 1024 } }); // 2MB

router.post('/', upload.single('file'), (req, res) => {
  if(!req.file) return res.status(400).json({ error: 'No file' });
  // return public path
  const urlPath = `/uploads/${req.file.filename}`;
  res.json({ url: urlPath });
});

module.exports = router;
