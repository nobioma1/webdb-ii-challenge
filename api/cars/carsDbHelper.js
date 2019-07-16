const db = require('../../data/dbConfig');

module.exports = { get, add };

function get() {
  return db('cars');
}

function getById(id) {
  return db('cars')
    .where({ id })
    .first();
}

function add(car) {
  console.log(car)
  return db('cars')
    .insert(car)
    .then(([id]) => getById(id))
}
