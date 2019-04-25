const router = require('express').Router();


router.post('/register', (req, res) => {
   res.status(200).json('This is a register route')
});

module.exports = router;
