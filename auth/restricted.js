const bcrypt = require('bcryptjs')

const Users = require('../api/users/users-model')

module.exports = function restricted(req, res, next) {
  const { username, password } = req.headers

  if (username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) next()
        else res.status(401).json({ message: 'You shall not pass!' })
      })
      .catch(err => res.status(500).json({ message: 'error validating credentials' }))
  } else res.status(404).json({ message: 'please provide valid credentials' })
}