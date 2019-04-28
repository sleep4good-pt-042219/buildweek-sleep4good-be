const db = require('../dbConfig.js');

module.exports = {
    fetchBookings,
    // addBooking
};


async function fetchBookings() {
    return db('bookings').select('*')
}