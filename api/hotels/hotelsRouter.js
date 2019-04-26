const router = require('express').Router();
const Hotels = require('./../../data/helpers/hotelsDbHelper');
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

router.put('/:id', restricted, async (req, res) => {
  const id = req.params.id;
  const updatedHotel = req.body;
  
  try {
    const hotel = await Hotels.update(id, updatedHotel);

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
