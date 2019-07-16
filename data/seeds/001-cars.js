exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: 'BEW-419-RL',
          make: 'Mercedes-Benz',
          model: 'AMG GT 53',
          mileage: 1000,
        },
        {
          vin: 'FEN-999-IN',
          make: 'Ferrari',
          model: 'GTC4 Lusso',
          mileage: 2000,
        },
        {
          vin: 'KSJ-385-JN',
          make: 'Honda',
          model: 'CR-V',
          mileage: 50000,
          transmission_type: 'Automatic',
        },
        {
          vin: 'LAF-035-SN',
          make: 'Toyota',
          model: 'Camry',
          mileage: 45000,
          status: 'Salvage',
        },
      ]);
    });
};
