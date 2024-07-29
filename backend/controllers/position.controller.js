const { Position } = require('../models');

const createPosition = async (req, res) => {
  Position.create({
    name: req.body.name
  }).then((data) => {
    return res.status(201).json({
      message: 'Position created successfully',
      data
    });
  }).catch((err) => {
    return res.status(400).json({ error: err.message });
  });
}

const getPositions = async (req, res) => {
  Position.findAll().then((data) => {
    return res.status(200).json({
      message: 'Get all positions',
      data
    });
  }).catch((err) => {
    return res.status(500).json({ error: err.message });
  });
}

const getPosition = async (req, res) => {
  Position.findByPk(req.params.id).then((data) => {
    if (!data) {
      return res.status(404).json({
        message: 'Position not found'
      });
    }

    return res.status(200).json({
      message: 'Get position by id',
      data
    });
  }).catch((err) => {
    return res.status(400).json({ error: err.message });
  });
}

const updatePosition = async (req, res) => {
  Position.findByPk(req.params.id).then((data) => {
    if (!data) {
      return res.status(404).json({
        message: 'Position not found'
      });
    }

    data.update({
      name: req.body.name
    }).then((data) => {
      return res.status(200).json({
        message: 'Position updated successfully',
        data
      });
    }).catch((err) => {
      return res.status(400).json({ error: err.message });
    });
  });
}

const deletePosition = async (req, res) => {
  Position.findByPk(req.params.id).then((data) => {
    if (!data) {
      return res.status(404).json({
        message: 'Position not found'
      });
    }

    data.destroy().then(() => {
      return res.status(200).json({
        message: 'Position deleted successfully'
      });
    }).catch((err) => {
      return res.status(400).json({ error: err.message });
    });
  });
}

module.exports = {
  createPosition,
  getPositions,
  getPosition,
  updatePosition,
  deletePosition
};
