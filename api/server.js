const express = require('express')
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)

const authRouter = require('./auth/auth-router')
const usersRoute = require('./users/users-route')
const restrictedRoute = require('./restricted/restricted-route')
const mw = require('./server-middleware')
const dbConnection = require('../data/db-config')

const server = express()

const sessionConfig = {
  name: 'webauth-i-challenge',
  secret: process.env.SESSION_SECRET || 'everybody knows though...',
  cookie: {
    maxAge: 1000 * 60 * 60, // 60 minutes
    secure: process.env.COOKIE_SECURE || false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    knex: dbConnection,
    tablename: 'knexsessions',
    sidfieldname: 'sessionid',
    createtable: true,
    clearInterval: 1000 * 60 * 30, // clear expired data every 30 minutes
  })
}

// Global Middleware
server.use(express.json())
server.use(session(sessionConfig))
server.use(mw.logger)

// Route handling
server.use('/api/auth', authRouter)
server.use('/api/users', usersRoute)
server.use('/api/restricted', restrictedRoute)

// Hello world test
server.get('/', (req, res) => {
  res.json('Hello from webauth-i-challenge!')
})

module.exports = server