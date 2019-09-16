const bcrypt = require('bcryptjs')

const Users = require('../api/login/login-model')

module.exports = function restricted(req, res, next) {
  const { user, password } = req.headers

  if (user && password) {
    Users.findBy({ user })
      .first()
      .then(usr => {
        if (usr && bcrypt.compareSync(password, usr.password)) next()
        else res.status(401).json({ message: 'You shall not pass!' })
      })
      .catch(err => res.status(500).json({ message: 'error validating credentials' }))
  } else res.status(404).json({ message: 'please provide valid credentials' })
}