const mongoose = require('mongoose')

const Schema = mongoose.Schema

/*
Action Logs information:
1. Battle ID (use object id generated by mongodb)
2. Player Id
3. Opponent Id
4. Action origin (0=player, 1=opponent)
5. Action type (0=weakattack, 1=strongattack, 2=heal, 3=surrender)
6. Value (damage dealth / restored health)
7. Timestamp

Constraints:
1. If action origin = 1, then action type != 2 or 3
*/

const actionLogSchema = new Schema({
  playerId: { type: Number, required: true },
  enemyId: { type: Number, required: true },
  actionOrigin: { type: Number, required: true },
  actionType: { type: Number, required: true },
  value: { type: Number, required: true },
}, {
  timestamps: true,
})

const ActionLog = mongoose.model('ActionLog', actionLogSchema)

module.exports = ActionLog