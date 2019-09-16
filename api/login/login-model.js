const db = require('../../data/db-config')

module.exports = {
  findBy,
}

function findBy(username) {
  return db('users')
    .where(username)
}