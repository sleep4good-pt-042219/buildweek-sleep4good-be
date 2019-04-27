const db = require('../dbConfig.js');

module.exports = {
    fetchLocations,
    getLocationById
};


async function fetchLocations(hotel_id) {
    return db('locations').select('*')
      .where({ 'locations.hotel_id': hotel_id })
      .join('hotels', 'hotels.id', 'locations.hotel_id')
}

async function getLocationById(id) {
    return db('locations')
      .where({ id })
}
  
