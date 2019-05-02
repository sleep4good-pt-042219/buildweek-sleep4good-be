const db = require('../dbConfig.js');

module.exports = {
    fetchLocationByHotelId,
    fetchAllLocations,
    getLocationById,
    addLocation,
    updateLocation,
    deleteLocation
};

async function fetchAllLocations() {
    return db('locations');
}
async function fetchLocationByHotelId(hotel_id) {
    return db('locations').select('*')
      .where({ 'locations.hotel_id': hotel_id })
      .join('hotels', 'hotels.id', 'locations.hotel_id')
}

async function deleteLocation(id) {
    return db('locations')
      .where({ id })
      .del()
}

async function addLocation(location) {
    return db('locations')
      .insert(location, 'id')
      .then(ids => {
        return getLocationById(ids[0]);
    });
}

async function updateLocation(id, changes) {
    return db('locations')
      .where({ id })
      .update(changes)
      .then(function() {
        return getLocationById(id);
      });
}
async function getLocationById(id) {
    return db('locations')
      .where({ id })
      .first()
}