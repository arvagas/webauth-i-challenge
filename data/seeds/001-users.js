const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admin', password: `${bcrypt.hashSync('password', 12)}`},
        {username: 'chicken', password: `${bcrypt.hashSync('sandwich', 12)}`},
        {username: 'crazy', password: `${bcrypt.hashSync('eyes', 12)}`},
      ])
    })
}
