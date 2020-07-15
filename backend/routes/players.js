const router = require('express').Router()

/*
Player information:
1. Full name
2. Email
3. Password
4. Avatar
5. Settings (auto log-in)
6. Login timestamps
*/

router.route('/').get((req, res) => {
    // get all players
})

router.route('/update/:id').post((req, res) => {
    // update player info by id
})

module.exports = router