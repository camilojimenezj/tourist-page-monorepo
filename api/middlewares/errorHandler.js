module.exports = (error, req, res, next) => {
  const message = error.message.match(/^[^:]*/)[0]

  if (error.name === 'CastError' || error.name === 'ValidationError' || error.name === 'MongoServerError') {
    console.log({ error: error.name, message })
    res.status(400).json({ error: error.name, message })
  } else if (error.name === 'JsonWebTokenError') {
    res.status(401).json({ error: 'invalid token' })
  } else if (error.name === 'TokenExpiredError') {
    res.status(401).json({ error: 'token expired' })
  } else {
    res.status(500).end()
  }
}
