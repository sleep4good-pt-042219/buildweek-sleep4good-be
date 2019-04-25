const router = require('express').Router();



router.get('/hotels', (req, res) => {
   res.status(200).json('This is a route for the hotels')
});

module.exports = router;
