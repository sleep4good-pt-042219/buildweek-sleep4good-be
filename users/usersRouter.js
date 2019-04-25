const router = require('express').Router();



router.get('/users', (req, res) => {
   res.status(200).json('This is a route for the users')
});

module.exports = router;
