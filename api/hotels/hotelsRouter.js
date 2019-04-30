const router = require('express').Router();
const Hotels = require('./../../data/helpers/hotelsDbHelper');
const Locations = require('./../../data/helpers/locationsDbHelper');
const restricted = require('../../auth/restrictedMiddleware');
const authorization = require('../../auth/authMiddleware');

router.get('/', restricted, async (req, res) => {
   try {
      const hotels = await Hotels.fetchAllHotels();

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
    const hotel = await Hotels.addHotel(newHotel);

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
     const hotel = await Hotels.getHotelById(id);

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
    const hotel = await Hotels.updateHotel(id, newHotel);

    if (hotel) {
        res.status(200).json({hotel, message: 'Hotel was successfully updated.'});
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
     const hotel = await Hotels.removeHotel(id);

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
  const hotel_id = req.params.id;
  try {
    const locations = await Locations.fetchAllLocations(hotel_id);
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
  const hotel_id = req.params.id;
  try {
    const locations = await Locations.fetchLocationByHotelId(hotel_id);
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

router.delete('/:id/locations/:location_id', restricted, async (req, res) => {
  const location_id = req.params.location_id;
  const hotel_id = req.params.id;
  try {
    const allLocations = await Locations.fetchLocationByHotelId(hotel_id);
    const deleted = await Locations.deleteLocationByLocationId(location_id);
    // allLocations[location_id] = null;
    if (deleted) {
        res.status(200).json({ message: 'This location was deleted.' });
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
      const hotels = await Hotels.fetchAllHotels();

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
