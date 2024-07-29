const express = require('express');

const {
  createPosition,
  getPositions,
  getPosition,
  updatePosition,
  deletePosition
} = require('../controllers/position.controller');

const router = express.Router();

router.post('/positions', createPosition);
router.get('/positions', getPositions);
router.get('/positions/:id', getPosition);
router.put('/positions/:id', updatePosition);
router.delete('/positions/:id', deletePosition);

module.exports = router;
