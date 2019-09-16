const express = require('express')

const mw = require('../auth/auth-middleware')

const router = express.Router()

router.get('/deep', mw.restricted, (req, res) => {
  res.json('Afraid of the deep depths of the ocean')
})

router.get('/dark', mw.restricted, (req, res) => {
  res.json('Afraid of dark rooms')
})

router.get('/secret', mw.restricted, (req, res) => {
  res.json('Secretly afraid of having secrets')
})

module.exports = router