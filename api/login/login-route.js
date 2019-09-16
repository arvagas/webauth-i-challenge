const express = require('express')
const bcrypt = require('bcryptjs')

const Users = require('../users/users-model')

const router = express.Router()

router.post('/', (req, res) => {
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

module.exports = router