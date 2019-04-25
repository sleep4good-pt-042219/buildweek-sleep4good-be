const router = require('express').Router();
const Hotels = require('./../../data/helpers/hotelsDbHelper');
const restricted = require('../../auth/restrictedMiddleware');
const authorization = require('../../auth/authMiddleware');

router.get('/', restricted, authorization, async (req, res) => {
   try {
      const hotels = await Hotels.fetchAll();

      if (hotels) {
          res.status(200).json(hotels);
      }
      else {
          res.status(404).json(`No hotels available.`)
      }
    } catch (e) {
      res.status(500).json(e);
    }
});

router.post('/', restricted, authorization, async (req, res) => {
   try {
      const hotels = await Hotels.fetchAll();

      if (hotels) {
          res.status(200).json(hotels);
      }
      else {
          res.status(404).json(`No hotels available.`)
      }
    } catch (e) {
      res.status(500).json(e);
    }
});

module.exports = router;
