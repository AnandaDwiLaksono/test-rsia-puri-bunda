const express = require('express');

const {
  createUnit,
  getUnits,
  getUnit,
  updateUnit,
  deleteUnit
} = require('../controllers/unit.controller');

const router = express.Router();

router.post('/units', createUnit);
router.get('/units', getUnits);
router.get('/units/:id', getUnit);
router.put('/units/:id', updateUnit);
router.delete('/units/:id', deleteUnit);

module.exports = router;
