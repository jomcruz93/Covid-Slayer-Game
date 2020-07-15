const router = require('express').Router()

/*
Action Logs information:
1. Battle ID
2. Opponent name
3. Action type (0=attack, 1=powerattack, 2=heal, 3=surrender)
4. Value
5. Timestamp
*/

router.route('/').get((req, res) => {
    // get all players
})

router.route('/update/:id').post((req, res) => {
    // update player info by id
})

module.exports = router