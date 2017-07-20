
const items = require('./seeds-data/items')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE items RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('items').insert(items);
    });
};
