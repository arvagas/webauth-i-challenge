const express = require('express')

const registerRoute = require('./register/register-route')
const sm = require('./server-middleware')

const server = express()

server.use(express.json())

// Global Middleware
server.use(sm.logger)

// Route handling
server.use('/api/register', registerRoute)

// Hello world test
server.get('/', (req, res) => {
  res.json('Hello from webauth-i-challenge!')
})

module.exports = server