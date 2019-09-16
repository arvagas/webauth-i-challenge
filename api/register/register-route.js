const express = require('express')

const Register = require('./register-model')

const router = express.Router()

router.post('/', (req, res) => {
  const credentials = req.body

  Register.add(credentials)
    .then(saved => res.status(201).json(saved))
    .catch(err => res.status(500).json({ message: 'error registering new user' }))
})

module.exports = router