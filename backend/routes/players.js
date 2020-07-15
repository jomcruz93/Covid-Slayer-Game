const router = require('express').Router()
let Player = require('../models/player.model')

/*
Player information:
1. Player ID
2. Full name
3. Email
4. Password
5. Avatar
6. Settings (auto log-in)
7. Login timestamps

const playerSchema = new Schema({
  playerId: { type: Number, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  playerAvatar: { type: Number, required: true },
  playerWeakAtkId: { type: Number, required: false },
  playerStrongAtkId: { type: Number, required: false },
})

*/

router.route('/').get((req, res) => {
  // get all players' data
  Player.find({})
  .then(playerData => res.json(playerData))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  // add new player into database
  const playerId = Number(req.body.playerId)
  const fullName = req.body.fullName
  const email = req.body.email
  const password = req.body.password
  const playerAvatar = Number(req.body.playerAvatar)
  const playerWeakAtkId = Number(req.body.playerWeakAtkId)
  const playerStrongAtkId = Number(req.body.playerStrongAtkId)

  const newPlayer = new Player({
    playerId,
    fullName,
    email,
    password,
    playerAvatar,
    playerWeakAtkId,
    playerStrongAtkId,
  })

  newPlayer.save()
    .then(() => res.json('New player has been successfully added.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  // update player info by id
})

module.exports = router