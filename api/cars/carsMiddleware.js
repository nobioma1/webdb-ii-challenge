const { getById } = require('./carsDbHelper');

const validateFields = body => {
  const vin = body.hasOwnProperty('vin');
  const make = body.hasOwnProperty('make');
  const model = body.hasOwnProperty('model');
  const mileage = body.hasOwnProperty('mileage');

  return vin && make && model && mileage;
};
const validateCar = async (req, res, next) => {
  if (req.body) {
    const { body } = req;
    const haveRequiredFields = validateFields(body);
    if (haveRequiredFields) {
      return next();
    }
    res.status(400).json({ error: 'vin, make, model, mileage are Required' });
  }
};

const validateCarId = async (req, res, next) => {
  try {
    const car = await getById(req.params.id);
    if (!car) {
      res.status(400).json({ error: 'car id is not Valid' });
    }
    req.car = car;
    return next();
  } catch (error) {
    res.status(500).json({ error: 'Error Validating car Id' });
  }
};

module.exports = { validateCar, validateCarId };
