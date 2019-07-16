exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table
      .text('vin')
      .unique()
      .notNullable();
    table.text('make').notNullable();
    table.text('model').notNullable();
    table.integer('mileage').notNullable();
    table.text('transmission_type').nullable();
    table.text('status').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
