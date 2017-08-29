const knex = require('./knex')

module.exports = {

getAll() {
  return knex('items')
},

delete(id) {
  return knex('items').where('id', id).del()
},

create(item) {
    return knex('items').insert(item, '*');
},

update(id, item) {
  return knex('items').where('id', id).update(item, '*')
}


};
