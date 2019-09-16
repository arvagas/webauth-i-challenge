const db = require('../../data/db-config')

module.exports = {
  find,
}

function find() {
  return db('users')
    .then(users => users)
}