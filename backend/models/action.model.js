const mongoose = require('mongoose')

const Schema = mongoose.Schema

/*
Action information:
1. Action ID
2. Action name
3. Action type (0=weak, 1=strong)
3. Minimum Value (Damage/Heal)
4. Maximum Value (Damage/Heal)
5. Cooldown Time (in seconds)
*/

const actionSchema = new Schema({
  actionId: { type: Number, required: true },
  actionName: { type: String, required: true },
  actionType: { type: Number, required: true },
  minValue: { type: Number, required: true },
  maxValue: { type: Number, required: true },
  cooldownTime: { type: Number, required: true },
})

const Action = mongoose.model('Action', actionSchema)

module.exports = Action