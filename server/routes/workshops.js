const express = require('express');
const { models } = require('../models');
const { authenticateJWT } = require('./_auth_middleware');

const router = express.Router();

router.get('/', async (req, res) => {
  const items = await models.Workshop.findAll();
  res.json(items);
});

router.get('/:id', async (req, res) => {
  const item = await models.Workshop.findByPk(req.params.id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

router.post('/', authenticateJWT, async (req, res) => {
  const created = await models.Workshop.create(req.body);
  res.status(201).json(created);
});

router.put('/:id', authenticateJWT, async (req, res) => {
  const item = await models.Workshop.findByPk(req.params.id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
});

router.delete('/:id', authenticateJWT, async (req, res) => {
  const item = await models.Workshop.findByPk(req.params.id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ ok: true });
});

module.exports = router;
