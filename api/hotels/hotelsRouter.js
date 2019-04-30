const router = require('express').Router();
const Hotels = require('./../../data/helpers/hotelsDbHelper');
const Locations = require('./../../data/helpers/locationsDbHelper');
const restricted = require('../../auth/restrictedMiddleware');
const authorization = require('../../auth/authMiddleware');

router.get('/', restricted, async (req, res) => {
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
  const newHotel = req.body;
  
  try {
    const hotel = await Hotels.insert(newHotel);

    if (hotel) {
        res.status(200).json(hotel);
    }
    else {
        res.status(404).json(`All hotel information is required.`)
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get('/:id', restricted, async (req, res) => {
  const id = req.params.id
  try {
     const hotel = await Hotels.getById(id);

     if (hotel) {
         res.status(200).json(hotel);
     }
     else {
         res.status(404).json(`This hotel is not available.`)
     }
   } catch (e) {
     res.status(500).json(e);
   }
});

router.put('/:id', restricted, authorization, async (req, res) => {
  const id = req.params.id;
  const newHotel = req.body;
  
  try {
    const hotel = await Hotels.update(id, newHotel);

    if (hotel) {
        res.status(200).json(hotel);
    }
    else {
        res.status(404).json(`This hotel is not available.`)
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete('/:id', restricted, async (req, res) => {
  const id = req.params.id
  try {
     const hotel = await Hotels.remove(id);

     if (hotel) {
         res.status(200).json('Hotel was removed');
     }
     else {
         res.status(404).json(`This hotel is not available.`)
     }
   } catch (e) {
     res.status(500).json(e);
   }
});

router.get('/:id/locations', restricted, async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const locations = await Locations.fetchLocations(id);
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

router.get('/:id/locations/:location_id', restricted, async (req, res) => {
  const location_id = req.params.location_id;
  const id = req.params.id;
  try {
    const locations = await Locations.fetchLocations(id);
    const location = locations[location_id];
    if (location) {
        res.status(200).json(location);
    }
    else {
        res.status(404).json(`This hotel location is not available.`)
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
