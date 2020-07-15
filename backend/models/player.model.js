const mongoose = require('mongoose')

const Schema = mongoose.Schema

/*
Player information:
1. Full name
2. Email
3. Password
4. Avatar
5. Settings (auto log-in)
6. Login timestamps
*/

const playerSchema = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: Number, required: true },
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player