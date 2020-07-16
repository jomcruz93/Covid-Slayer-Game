const mongoose = require('mongoose')

const Schema = mongoose.Schema

const avatarSchema = new Schema({
  name,
  weakAtkId: { type: Number, required: true, default: 0 },
  strongAtkId: { type: Number, required: true, default: 1 },
})

const Avatar = mongoose.model('Avatar', avatarSchema)

module.exports = Avatar