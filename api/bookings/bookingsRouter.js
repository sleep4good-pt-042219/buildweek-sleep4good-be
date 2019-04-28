const router = require('express').Router();
const Bookings = require('./../../data/helpers/bookingsDbHelper');
const restricted = require('../../auth/restrictedMiddleware');

router.get('/', restricted, async (req, res) => {
    const bookings = Bookings.fetchBookings();
    try {
        if (bookings) {
            res.status(200).json(bookings)
        } else {
            res.status(404).json('No bookings are currently available.')
        }
    }
    catch (e) {
        res.status(500).json(e)
    }
})
module.exports = router;