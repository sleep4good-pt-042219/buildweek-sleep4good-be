const db = require('../dbConfig.js');

module.exports = {
    fetchLocations,
    fetchAllLocations
};

async function fetchLocations() {
    return db('locations');
}
async function fetchLocations(hotel_id) {
    return db('locations').select('*')
      .where({ 'locations.hotel_id': hotel_id })
      .join('hotels', 'hotels.id', 'locations.hotel_id')
}