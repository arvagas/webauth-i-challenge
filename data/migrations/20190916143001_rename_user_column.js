
exports.up = function(knex) {
  return knex.schema.table('users', tbl => {
    tbl.renameColumn('user', 'username')
  })
}

exports.down = function(knex) {
  return knex.schema.table('users', tbl => {
    tbl.renameColumn('username', 'user')
  })
}
