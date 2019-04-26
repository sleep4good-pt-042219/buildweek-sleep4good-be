const db = require('../dbConfig.js');

module.exports = {
  fetchAll,
  getById,
  insert,
  findBy,
  fetchLocations
};

function fetchAll() {
  return db('hotels');
}

function getById(id) {
  return db('hotels')
    .where({ id })
    .first();
}

async function fetchLocations(hotel_id) {
  return db('locations')
    .where({ 'locations.hotel_id': hotel_id })
    .join('hotels', 'hotels.id', 'locations.hotel_id')
}
function insert(hotel) {
  return db('hotels')
    .insert(hotel)
    .then(ids => {
      return getById(ids[0]);
    });
}
function findBy(filter) {
    return db('hotels').where(filter);
}
