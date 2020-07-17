const mongoose = require('mongoose')

const Schema = mongoose.Schema

const avatarSchema = new Schema({
  name: { type: String, required: true },
  weakAtkId: { type: String, required: true, default: 0 },
  strongAtkId: { type: String, required: true, default: 1 },
})

const Avatar = mongoose.model('Avatar', avatarSchema)

module.exports = Avatar