const express = require('express')

const Users = require('./users-model')
const mw = require('../auth/auth-middleware')

const router = express.Router()

router.get('/', mw.restricted, (req, res) => {
  Users.find()
    .then(users => res.json(users))
    .catch(err => res.send(err))
})

module.exports = router