const router = require('express').Router();
const Locations = require('./../../data/helpers/locationsDbHelper');
const restricted = require('../../auth/restrictedMiddleware');

router.get('/', restricted, async (req, res) => {
    try {

      const locations = await Locations.fetchAllLocations();

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


router.get('/:id/', restricted, async (req, res) => {
  const id = req.params.id;

  try {
    const location = await Locations.fetchLocationByLocationId(id);
    if (location) {
        res.status(201).json(location);
    }
    else {
        res.status(404).json(`This hotel location is not available.`)
    }
  } catch (e) {
    res.status(500).json(e);
  }
});


router.delete('/:id/', restricted, async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await Locations.deleteLocationByLocationId(id);
    if (deleted) {
        res.status(201).json({ message: 'This location was deleted.' });
    }
    else {
        res.status(404).json(`This hotel location is not available.`)
    }
  } catch (e) {
    res.status(500).json(e);
  }
});


  module.exports = router;