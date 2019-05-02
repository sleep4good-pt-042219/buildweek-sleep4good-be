const db = require('../dbConfig.js');

module.exports = {
  fetchAllHotels,
  getHotelById,
  addHotel,
  updateHotel,
  removeHotel,
  findHotelBy,
};

async function fetchAllHotels() {
  return db('hotels');
}

async function getHotelById(id) {
  return db('hotels')
    .where({ id })
    .first();
}

async function removeHotel(id) {
  return db('hotels')
    .where({ id })
    .del();
}

async function addHotel(hotel) {
  return db('hotels')
    .insert(hotel, 'id')
    .then(ids => {
      return getHotelById(ids[0]);
    });
}

async function updateHotel(id, changes) {
  return db('hotels')
    .where({ id })
    .update(changes)
    .then(function() {
      return getHotelById(id);
    });
}

function findHotelBy(filter) {
    return db('hotels').where(filter);
}
