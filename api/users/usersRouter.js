const router = require('express').Router();
const Users = require('./../../data/helpers/usersDbHelper');

const restricted = require('./../../auth/restrictedMiddleware');

router.get('/', restricted, async (req, res) => {
   try {
      const users = await Users.fetchAll();

      if (users) {
          res.status(200).json(users);
      }
      else {
          res.status(404).json(`Users are not available.`)
      }
    } catch (e) {
      res.status(500).json(e);
    }
});

module.exports = router;
