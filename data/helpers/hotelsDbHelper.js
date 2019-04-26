const db = require('../dbConfig.js');

module.exports = {
  fetchAll,
  getById,
  insert,
  update,
  remove,
  findBy,
  fetchLocations
};

async function fetchAll() {
  return db('hotels');
}

async function getById(id) {
  return db('hotels')
    .where({ id })
    .first();
}

async function remove(id) {
  return db('hotels')
    .where({ id })
    .del();
}

async function fetchLocations(hotel_id) {
  return db('locations')
    .where({ 'locations.hotel_id': hotel_id })
    .join('hotels', 'hotels.id', 'locations.hotel_id')
}

async function insert(hotel) {
  return db('hotels')
    .insert(hotel)
    .then(ids => {
      return getById(ids[0]);
    });
}

async function update(id, changes) {
  return db('hotels')
    .where({ id })
    .update(changes)
    .then(function() {
      return getById(id);
    });
}

function findBy(filter) {
    return db('hotels').where(filter);
}
