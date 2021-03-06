const router = require('express').Router()
let Enemy = require('../models/enemy.model')

/*
Enemy information:
1. Enemy ID (use object id generated by mongodb)
2. Enemy name
3. Action Tendency
4. Weak Attack Tendency
5. Strong Attack Tendency
6. Enemy weak attack action ID
7. Enemy strong attack action ID

const enemySchema = new Schema({
  enemyName: { type: String, required: true },

  enemyActionRate: { type: Number, required: true },
  enemyWeakAtkRate: { type: Number, required: true },
  enemyStrongAtkRate: { type: Number, required: true },

  enemyWeakAtkId: { type: String, required: false, default: 0 },
  enemyStrongAtkId: { type: String, required: false, default: 1 },
})
*/

router.route('/').get((req, res) => {
  // get all enemy data
  Enemy.find({})
  .then(enemyData => res.json(enemyData))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  // add new enemy into database
  const enemyName = Number(req.body.enemyName)

  const enemyActionRate = req.body.enemyActionRate
  const enemyWeakAtkRate = req.body.enemyWeakAtkRate
  const enemyStrongAtkRate = req.body.enemyStrongAtkRate

  const enemyWeakAtkId = req.body.enemyWeakAtkId
  const enemyStrongAtkId = req.body.enemyStrongAtkId


  const newEnemy = new Avatar({
    enemyName,
    enemyActionRate,
    enemyWeakAtkRate,
    enemyStrongAtkRate,
    enemyWeakAtkId,
    enemyStrongAtkId
  })

  newEnemy.save()
    .then(() => res.json('New enemy has been successfully added.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  // update enemy info by id
})

module.exports = router