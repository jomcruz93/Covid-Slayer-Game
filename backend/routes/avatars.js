const router = require('express').Router()
let Avatar = require('../models/avatar.model')

/*
const avatarSchema = new Schema({
  name,
  weakAtkId: { type: Number, required: true, default: 0 },
  strongAtkId: { type: Number, required: true, default: 1 },
})
*/

router.route('/').get((req, res) => {
  // get all avatar data
  Avatar.find({})
  .then(avatarData => res.json(avatarData))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  // add new avatar into database
  const name = Number(req.body.name)
  const weakAtkId = req.body.weakAtkId
  const strongAtkId = req.body.strongAtkId

  const newAvatar = new Avatar({
    name,
    weakAtkId,
    strongAtkId
  })

  newAvatar.save()
    .then(() => res.json('New avatar has been successfully added.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  // update avatar info by id
})

module.exports = router