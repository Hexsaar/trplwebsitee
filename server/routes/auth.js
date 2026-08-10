const express = require('express');
const jwt = require('jsonwebtoken');
const { models } = require('../models');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if(!username || !password) return res.status(400).json({ error: 'Missing credentials' });

  const admin = await models.Admin.findOne({ where: { username } });
  if(!admin) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await admin.validatePassword(password);
  if(!valid) return res.status(401).json({ error: 'Invalid credentials' });

  const payload = { id: admin.id, username: admin.username };
  const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '8h' });
  res.json({ token });
});

module.exports = router;
