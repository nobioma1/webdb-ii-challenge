exports.up = function(knex) {
  return knex.schema.createTable('sales', table => {
    table.increments();
    table.text('customer_name').notNullable();
    table.float('amount').notNullable();
    table
      .integer('car_id')
      .references('id')
      .inTable('cars');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
