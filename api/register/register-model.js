const db = require('../../data/db-config')

const bcrypt = require('bcryptjs')

module.exports = {
  add,
  findById,
}

function findById(id) {
  return db('users')
    .where({ id })
    .first()
    .then(user => user)
}

function add(userData) {
  const hash = bcrypt.hashSync(userData.password, 12)

  userData.password = hash

  return db('users')
    .insert(userData, 'id')
    .then(userIdArr => findById(userIdArr[0]))
}