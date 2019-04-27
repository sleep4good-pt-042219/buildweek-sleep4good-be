const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');

server.use(express.json(), cors(), helmet());

const authRouter = require('./auth/authRouter')
const usersRouter = require('./api/users/usersRouter')
const hotelsRouter = require('./api/hotels/hotelsRouter')

server.get('/', (req, res) => {
    res.status(200).json('Home Page up and running')
});

server.use('/api/hotels/', hotelsRouter);
server.use('/api/users/', usersRouter);
// server.use('/api/users/', usersRouter);
server.use('/auth/', authRouter);

module.exports = server;
