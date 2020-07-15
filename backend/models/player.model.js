const mongoose = require('mongoose')

const Schema = mongoose.Schema

/*
Player information:
1. Player ID
2. Full name
3. Email
4. Password
5. Avatar
6. Settings (auto log-in)
7. Login timestamps
*/

const playerSchema = new Schema({
    playerId: { type: Number, required: true },
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    playerAvatar: { type: Number, required: true },
    playerWeakAtkId: { type: Number, required: false },
    playerStrongAtkId: { type: Number, required: false },
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player