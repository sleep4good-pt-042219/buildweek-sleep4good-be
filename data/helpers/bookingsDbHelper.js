const db = require('../dbConfig.js');

module.exports = {
    fetchBookings,
    addBooking
};

function getById(id) {
    return db('users')
      .where({ id })
      .first();
}
async function fetchBookings() {
    return db('bookings').select('*')
}
async function addBooking(booking) {
    return db('bookings')
      .insert(booking, ['id'])
      .then(ids => {
        return getById(ids[0]);
    });
}