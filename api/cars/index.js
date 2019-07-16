const express = require('express');
const carsDb = require('./carsDbHelper');
const { validateCar, validateCarId } = require('./carsMiddleware');

const cars = express.Router();

cars.get('/', async (req, res) => {
  try {
    const cars = await carsDb.get();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Error getting cars' });
  }
});

cars.post('/', validateCar, async (req, res) => {
  try {
    const cars = await carsDb.add(req.body);
    res.status(200).json(cars);
  } catch (error) {
    if (error.errno === 19) {
      return res.status(400).json({ message: 'Car already Exists' });
    }
    return res.status(500).json({ error: 'Error adding cars' });
  }
});

cars.delete('/:id', validateCarId, async (req, res) => {
  try {
    await carsDb.remove(req.car.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting car' });
  }
});

module.exports = cars;
