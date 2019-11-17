const express = require('express')
const bcrypt = require('bcryptjs')

const Users = require('../users/users-model')

const router = express.Router()

router.post('/register', (req, res) => {
  const credentials = req.body

  Users.add(credentials)
    .then(saved => res.status(201).json(saved))
    .catch(err => res.status(500).json({ message: 'error registering new user' }))
})

router.post('/login', (req, res) => {
  const { username, password } = req.body

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user
        res.json(`Logged in!`)
      }
      else res.status(401).json({ message: 'You shall not pass!' })
    })
    .catch(err => res.status(500).json({ message: 'error logging in' }))
})

router.get('/logout', (req, res) => {
  if (req.session.user) {
    req.session.destroy(err => {
      if (err) res.status(500).json({ message: 'error logging out' })
      else res.status(200).json({ message: 'log out successful' })
    })
  } else res.json({ message: 'not logged in' })
})

module.exports = router