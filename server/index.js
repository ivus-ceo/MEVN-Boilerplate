require('dotenv').config();

const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

const PORT = process.env.APP_PORT || 3000

/**
 * Server config
 */
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', require(path.join(__dirname, '/routes/web')))

/**
 * Connection to database
 */
mongoose.connect(process.env.DB_CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`[OK] server is running on http://localhost:${ PORT }`))
  })
  .catch((error) => {
    console.log(`[ERROR] ${error}`);
  })