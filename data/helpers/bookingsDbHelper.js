const db = require('../dbConfig.js');

module.exports = {
    fetchBookings,
    addBooking,
    getBookingById
};

function getBookingById(id) {
    return db('bookings')
      .where({ id })
      .first();
}
function fetchBookings() {
    return db('bookings')
}
function addBooking(booking) {
    return db('bookings')
      .insert(booking, ['id'])
      .then(ids => {
        return getBookingById(ids[0]);
    });
}