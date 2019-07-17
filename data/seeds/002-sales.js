exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('sales').insert([
        {
          customer_name: 'Tod Freemen',
          amount: 154993.99,
          car_id: 1,
        },
        {
          customer_name: 'Julie Robert',
          amount: 2356.00,
          car_id: 3,
        },
      ]);
    });
};
