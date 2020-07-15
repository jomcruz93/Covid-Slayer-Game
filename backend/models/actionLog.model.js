const mongoose = require('mongoose')

const Schema = mongoose.Schema

/*
Action Logs information:
1. Battle ID (auto-generated)
2. Opponent name
3. Action type (0=attack, 1=powerattack, 2=heal, 3=surrender)
4. Value
5. Timestamp
*/

const actionLogSchema = new Schema({
    enemy: { type: String, required: true },
    actionType: { type: String, required: true },
    value: { type: Number, required: true },
}, {
    timestamps: true,
})

const ActionLog = mongoose.model('ActionLog', actionLogSchema)

module.exports = ActionLog