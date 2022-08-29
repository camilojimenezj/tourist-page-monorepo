const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authorization = req.get('authorization')
  let token = null
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  const decodedToken = jwt.verify(token, process.env.SECRET)

  if (!(token && decodedToken.id)) {
    return res.status(400).json({ error: 'Token is missing or invalid' })
  }

  req.userId = decodedToken.id
  next()
}
