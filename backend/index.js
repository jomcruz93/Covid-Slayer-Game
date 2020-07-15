const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

require('dotenv').config()

app.use(cors())
app.use(express.json())

/* Sample routes
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)
*/

const playersRouter = require('./routes/players')
const actionLogsRouter = require('./routes/actionLogs')
app.use('/players', playersRouter)
app.use('/actionLogs', actionLogsRouter)

// Start server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})