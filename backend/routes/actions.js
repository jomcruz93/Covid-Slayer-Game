const router = require('express').Router()
let Action = require('../models/action.model')

/*
Action information:
1. Action ID (use object id generated by mongodb)
2. Action name
3. Action type (weak, strong)
3. Minimum Value (Damage/Heal)
4. Maximum Value (Damage/Heal)
5. Cooldown Time (in seconds)

const actionSchema = new Schema({
  actionName: { type: String, required: true },
  actionType: { type: String, required: true },
  minValue: { type: Number, required: true },
  maxValue: { type: Number, required: true },
  cooldownTime: { type: Number, required: true },
})
*/

router.route('/add').post((req, res) => {
  // add new action into database
  const actionName = req.body.actionName
  const actionType = req.body.actionType

  const minValue = Number(req.body.minValue)
  const maxValue = Number(req.body.maxValue)

  const cooldownTime = Number(req.body.cooldownTime)

  const newAction = new Action({
    actionName,
    actionType,
    minValue,
    maxValue,
    cooldownTime
  })

  newAction.save()
    .then(() => res.json('New action has been successfully added.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router