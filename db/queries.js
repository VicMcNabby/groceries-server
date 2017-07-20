const knex = require('./knex')

module.exports = {

getAll() {
  return knex('items')
},
delete(id) {
  return knex('items').where('id', id).del()
}

};
