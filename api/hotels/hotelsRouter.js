const router = require('express').Router();
const Hotels = require('./../../data/helpers/hotelsDbHelper');
const restricted = require('./../../auth/restrictedMiddleware');



router.get('/', restricted, async (req, res) => {
   try {
      const hotes = await Hotels.fetchAll();

      if (hotes) {
          res.status(200).json(hotes);
      }
      else {
          res.status(404).json(`No hotels available.`)
      }
    } catch (e) {
      res.status(500).json(e);
    }
});

module.exports = router;
