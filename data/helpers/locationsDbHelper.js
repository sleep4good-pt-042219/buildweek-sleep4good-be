const db = require('../dbConfig.js');

module.exports = {
    fetchLocationByHotelId,
    fetchAllLocations,
    deleteLocationByLocationId
};

async function fetchAllLocations() {
    return db('locations');
}
async function fetchLocationByHotelId(hotel_id) {
    return db('locations').select('*')
      .where({ 'locations.hotel_id': hotel_id })
      .join('hotels', 'hotels.id', 'locations.hotel_id')
}

async function deleteLocationByLocationId(location_id) {
    return db('locations')
      .where({ location_id })
      .del()
}