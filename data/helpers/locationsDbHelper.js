const db = require('../dbConfig.js');

module.exports = {
    fetchLocationByHotelId,
    fetchAllLocations,
    fetchLocationByLocationId,
    deleteLocationByLocationId
};

async function fetchAllLocations() {
    return db('locations');
}
async function fetchLocationByHotelId(hotel_id) {
    // console.log(hotel_id)
    return db('locations').select('*')
      .where({ 'locations.hotel_id': hotel_id })
      .join('hotels', 'hotels.id', 'locations.hotel_id')
}

async function deleteLocationByLocationId(id) {
    // console.log(id)
    return db('locations')
      .where({ id })
      .del()
}

async function fetchLocationByLocationId(id) {
    // console.log(id)
    return db('locations')
      .where({ id })
      .first()
}