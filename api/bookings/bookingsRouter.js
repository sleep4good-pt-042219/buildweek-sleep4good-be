const router = require('express').Router();
const Bookings = require('./../../data/helpers/bookingsDbHelper');
const restricted = require('../../auth/restrictedMiddleware');

router.get('/', restricted, async (req, res) => {
    try {
        const bookings = await Bookings.fetchBookings();
        
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
        const booking = await Bookings.addBooking(newBooking);

        if (booking) {
            res.status(201).json({message: 'Booking was processed successfully', booking})
        } else {
            res.status(404).json('All fields are required available.')
        }
    }
    catch (e) {
        res.status(500).json(e)
    }
})

router.put('/:id', restricted, async (req, res) => {
    
    const id = req.params.id;
    const updateBooking = req.body;

    try {
        const booking = await Bookings.updateBooking(id, updateBooking);

        if (booking) {
            res.status(201).json({message: 'Booking was updated successfully', booking})
        } else {
            res.status(404).json('All fields are required available.')
        }
    }
    catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
})

router.delete('/:id', restricted, async (req, res) => {
    
    const id = req.params.id;
    try {
        const deleted = await Bookings.deleteBooking(id);

        if (deleted) {
            res.status(200).json('Booking was successfully.')
        } else {
            res.status(404).json('This booking id is not available.')
        }
    }
    catch (e) {
        res.status(500).json(e)
    }
})

router.get('/:id', restricted, async (req, res) => {
    
    const id = req.params.id;
    try {
        const booking = await Bookings.getBookingById(id);

        if (booking) {
            res.status(200).json(booking)
        } else {
            res.status(404).json('This booking id is not available.')
        }
    }
    catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router;