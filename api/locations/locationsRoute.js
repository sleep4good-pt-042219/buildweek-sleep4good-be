const router = require('express').Router();
const Locations = require('./../../data/helpers/locationsDbHelper');
const restricted = require('../../auth/restrictedMiddleware');

router.get('/', restricted, async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      const locations = await Locations.fetchAllLocations();
      console.log(locations);
      if (locations) {
          res.status(200).json(locations);
      }
      else {
          res.status(404).json(`This hotel's locations are not available.`)
      }
    } catch (e) {
      res.status(500).json(e);
    }
  });

  module.exports = router;