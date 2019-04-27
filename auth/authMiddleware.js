const authorization = (req, res, next) => {

  const token = req.decodedJwt;

  if (token.userRole === 1 || 2 ) {
    next()
  } else {
    res.status(403).json({ message: 'You do not have permission' });
  }
  
}
module.exports = authorization;
