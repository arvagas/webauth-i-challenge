const bcrypt = require('bcryptjs')

const db = require('../../data/db-config')

module.exports = {
  find,
  findBy,
  findById,
  add,
}

function find() {
  return db('users')
    .then(users => users)
}

function findBy(username) {
  return db('users')
    .where(username)
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