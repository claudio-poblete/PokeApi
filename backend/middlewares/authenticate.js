const jwt = require('jsonwebtoken')

const authenticateUser = (req, res, next) => {
  const token = req.header['authorization']?.split('')[1]
  if (!token) {
    return res.status(401).json({ message: 'No autorizado'})
  }

  jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
    if (error) {
      return res.status(403).json({ message: 'Token inválido' })
    }
    req.user = decoded
    next()
  })
}

module.exports = authenticateUser