const router = require('express').Router()

/*
Action Logs information:
1. Battle ID (unique identifier for each battle)
2. Player Id
3. Opponent Id
4. Action origin (0=player, 1=opponent)
5. Action type (0=weakattack, 1=strongattack, 2=heal, 3=surrender)
6. Value (damage dealth / restored health)
7. Timestamp

Constraints:
1. If action origin = 1, then action type != 2 or 3
*/

router.route('/').get((req, res) => {
  // get all players
})

router.route('/update/:id').post((req, res) => {
  // update player info by id
})

module.exports = router