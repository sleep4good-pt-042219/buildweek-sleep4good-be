const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('./../data/helpers/usersDbHelper');
const jwt = require('jsonwebtoken');
const secret = require('./../config/credentials').jwtSecret;

function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
      userRole: user.role_id
    }
    const options = {
      expiresIn: '1d',
    }
    return jwt.sign(payload, secret, options)
}

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

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                  token, 
                  message: `Welcome ${user.username}!`, 
                  username: user.username
                });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = router;
