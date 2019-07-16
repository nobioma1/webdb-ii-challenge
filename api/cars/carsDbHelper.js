const db = require('../../data/dbConfig');

module.exports = { get, add, getById, remove, update };

function get() {
  return db('cars');
}

function getById(id) {
  return db('cars')
    .where({ id })
    .first();
}

function add(car) {
  return db('cars')
    .insert(car)
    .then(([id]) => getById(id));
}

function remove(id) {
  return db('cars')
    .where({ id })
    .del();
}

function update(id, car) {
  return db('cars')
    .where({ id })
    .update(car)
    .then(() => getById(id));
}
