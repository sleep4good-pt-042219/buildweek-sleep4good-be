const db = require('../dbConfig.js');

module.exports = {
    fetchBookings,
    addBooking,
    getBookingById,
    updateBooking,
    deleteBooking
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
function deleteBooking(id) {
    return db('bookings')
        .where({ id })
        .del()
}

function updateBooking(id, changes) {
    return db('bookings')
      .where({ id })
      .update(changes)
      .then(function() {
        return getBookingById(id);
    });
}