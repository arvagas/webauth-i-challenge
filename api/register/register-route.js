const express = require('express')

const Users = require('../users/users-model')

const router = express.Router()

router.post('/', (req, res) => {
  const credentials = req.body

  Users.add(credentials)
    .then(saved => res.status(201).json(saved))
    .catch(err => res.status(500).json({ message: 'error registering new user' }))
})

module.exports = router