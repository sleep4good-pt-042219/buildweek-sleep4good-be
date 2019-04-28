const router = require('express').Router();
const Bookings = require('./../../data/helpers/bookingsDbHelper');
const restricted = require('../../auth/restrictedMiddleware');

router.get('/', restricted, async (req, res) => {
    try {
        const bookings = Bookings.fetchBookings();
        
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

router.post('/', restricted, async (req, res) => {
    
    const newBooking = req.body;

    try {
        const booking = Bookings.addBooking(newBooking);

        if (booking) {
            res.status(200).json(booking)
        } else {
            res.status(404).json('All fields are required available.')
        }
    }
    catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router;