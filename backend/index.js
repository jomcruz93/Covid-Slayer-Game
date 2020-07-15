const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Setup mongodb connection.
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
const connection = mongoose.connection

// Connect to mongodb.
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

// Setup routes.
const playersRouter = require('./routes/players')
const actionLogsRouter = require('./routes/actionLogs')
app.use('/players', playersRouter)
app.use('/actionLogs', actionLogsRouter)

// Start server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})