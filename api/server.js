const express = require('express');
const carsRouter = require('./cars');

const server = express();

server.use(express.json());
server.use('/api/cars', carsRouter);

server.use('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Car-Dealer Challenge' });
});

module.exports = server;
