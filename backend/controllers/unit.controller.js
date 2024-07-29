const { Unit } = require('../models');

const createUnit = async (req, res) => {
  Unit.create({
    name: req.body.name
  }).then((data) => {
    return res.status(201).json({
      message: 'Unit created successfully',
      data
    });
  }).catch((err) => {
    return res.status(400).json({ error: err.message });
  });
};

const getUnits = async (req, res) => {
  Unit.findAll().then((data) => {
    return res.status(200).json({
      message: 'Get all units',
      data
    });
  }).catch((err) => {
    return res.status(500).json({ error: err.message });
  });
};

const getUnit = async (req, res) => {
  Unit.findByPk(req.params.id).then((data) => {
    if (!data) {
      return res.status(404).json({
        message: 'Unit not found'
      });
    }

    return res.status(200).json({
      message: 'Get unit by id',
      data
    });
  }).catch((err) => {
    return res.status(400).json({ error: err.message });
  });
};

const updateUnit = async (req, res) => {
  Unit.findByPk(req.params.id).then((data) => {
    if (!data) {
      return res.status(404).json({
        message: 'Unit not found'
      });
    }

    data.update({
      name: req.body.name
    }).then((data) => {
      return res.status(200).json({
        message: 'Unit updated successfully',
        data
      });
    }).catch((err) => {
      return res.status(400).json({ error: err.message });
    });
  });
};

const deleteUnit = async (req, res) => {
  Unit.findByPk(req.params.id).then((data) => {
    if (!data) {
      return res.status(404).json({
        message: 'Unit not found'
      });
    }

    data.destroy().then(() => {
      return res.status(204).json({
        message: 'Unit deleted successfully'
      });
    }).catch((err) => {
      return res.status(500).json({ error: err.message });
    });
  });
};

module.exports = {
  createUnit,
  getUnits,
  getUnit,
  updateUnit,
  deleteUnit
};
