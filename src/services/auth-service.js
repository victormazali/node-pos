const jwt = require('jsonwebtoken')

exports.generateToken = async(data) => {
  return jwt.sign(data, process.env.SECRET, { expiresIn: '1d' })
}

exports.decodeToken = async(token) => {
  return await jwt.verify(token, process.env.SECRET)
}

exports.authorize = async(req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token']

  if(!token) { return res.status(401).json({ message: 'Acesso negado!' }) }

  jwt.verify(token, process.env.SECRET, function(error, decode) {
    if(error) { return res.status(401).json({ message: 'Token Inválido', error: error }) }

    next()
  })
}
