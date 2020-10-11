const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://posgraduacao123:posgraduacao123@cluster0.saybp.mongodb.net/bdposlogs?retryWrites=true&w=majority'
const conn = mongoose.createConnection(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

const logSchema = new mongoose.Schema({ message: String })

module.exports = conn.model('developments', logSchema)
