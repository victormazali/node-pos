const Log = require('../app/models/log')

exports.create = async(data) => {
  const log = new Log()

  log.message = data.message
  return await log.save()
}

exports.all = async() => { return await Log.find() }

exports.getById = async(id) => { return await Log.findById(id) }
