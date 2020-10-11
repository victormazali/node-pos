const customerRepository = require('../repositories/customer-repository')

exports.create = async(req, res) => {
  try {
    const result = await customerRepository.login(req.body.email, req.body.password)
    res.status(200).send({ auth: true, token: result })
  } catch(error) {
    if (!error.status) { return res.status(500).send({ message: 'Ação não permitida' }) }

    res.status(error.status).json({ error: { code: error.code, message: error.message } })
  }
}
