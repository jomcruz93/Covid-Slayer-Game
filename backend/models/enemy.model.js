const mongoose = require('mongoose')

const Schema = mongoose.Schema

/*
Enemy information:
1. Enemy ID
2. Enemy name
3. Avatar
4. Weak Attack Tendency
5. Strong Attack Tendency
6. Enemy weak attack action ID
7. Enemy strong attack action ID
*/

const enemySchema = new Schema({
  enemyId: { type: Number, required: true },
  enemyName: { type: String, required: true },
  enemyAvatar: { type: Number, required: true },

  enemyWeakAtkRate: { type: Number, required: true },
  enemyStrongAtkRate: { type: Number, required: true },

  enemyWeakAtkId: { type: Number, required: false },
  enemyStrongAtkId: { type: Number, required: false },
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player