const express = require('express')
const bcrypt = require('bcryptjs')

const Login = require('./login-model')

const router = express.Router()

router.post('/', (req, res) => {
  const { user, password } = req.body

  Login.findBy({ user })
    .first()
    .then(login => {
      if (user && bcrypt.compareSync(password, login.password)) res.json(`Welcome ${login.user}!`)
      else res.status(401).json({ message: 'invalid credentials' })
    })
    .catch(err => res.status(500).json({ message: 'error logging in' }))
})

module.exports = router