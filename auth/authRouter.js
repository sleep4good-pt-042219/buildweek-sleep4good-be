const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('./../data/helpers/usersDbHelper');

const generateToken = require('./generateToken');

router.post('/partner/register', async (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  user.role_id = 2;
  try {
    const newUser = await Users.insert(user)
    if (newUser) {
      res.status(201).json(newUser);
    } else {
      res.status(404).json('All fields are required')
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/patron/register', async (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  user.role_id = 3;
  try {
    const newUser = await Users.insert(user);

    if (newUser) {
      res.status(201).json(newUser);
    } else {
      res.status(404).json('All fields are required')
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/login', async (req, res) => {
    let { username, password } = req.body;

    try {

      const loggedinUser = await Users.findBy({username});

      if (loggedinUser[0] && bcrypt.compareSync(password, loggedinUser[0].password)) {

        const token = generateToken(loggedinUser[0]);
        res.status(200).json({
          token, 
          message: `Welcome ${loggedinUser[0].username}!`, 
          username: loggedinUser[0].username
        });

      } else {

          res.status(401).json({ message: 'Invalid Credentials' });

      }
    }
    catch (e) {
      console.log(e)
      res.status(500).json(e);
    }
});

module.exports = router;