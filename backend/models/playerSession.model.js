const mongoose = require('mongoose')

const Schema = mongoose.Schema

const playerSessionSchema = new Schema({
  playerId: { type: String, required: true },
  timestamp: { type: Date, required: false, default: Date.now() },
  hasEnded: { type: Boolean, required: false, default: false },
})

const PlayerSession = mongoose.model('PlayerSession', playerSessionSchema)

module.exports = PlayerSession