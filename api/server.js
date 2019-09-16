const express = require('express')
const session = require('express-session')

const authRouter = require('./auth/auth-router')
const usersRoute = require('./users/users-route')
const mw = require('./server-middleware')

const server = express()

const sessionConfig = {
  name: 'webauth-i-challenge',
  secret: 'everybody knows though...',
  cookie: {
    maxAge: 1000 * 30,
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
}

// Global Middleware
server.use(express.json())
server.use(session(sessionConfig))
server.use(mw.logger)

// Route handling
server.use('/api', authRouter)
server.use('/api/users', usersRoute)

// Hello world test
server.get('/', (req, res) => {
  res.json('Hello from webauth-i-challenge!')
})

module.exports = server