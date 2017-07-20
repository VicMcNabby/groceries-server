exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', (table) => {
	  table.increments('id').primary();
	  table.string('name').notNullable();
	  table.integer('aisle').notNullable();
    table.string('photo_url');
  })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('items');
};
