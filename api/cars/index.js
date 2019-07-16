const express = require('express');
const carsDb = require('./carsDbHelper');

const cars = express.Router();

cars.get('/', async (req, res) => {
  try {
    const cars = await carsDb.get();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Error getting cars' });
  }
});

module.exports = cars;
