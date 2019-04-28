exports.seed = function(knex, Promise) {
  return knex('hotels')
    .truncate()
    .then(function() { 
        return knex('hotels').insert([
        { hotel_name: 'Marry-a-lott', imageUrl: '' },
        { hotel_name: 'Holiday Binn', imageUrl: '' },
        { hotel_name: 'Shillton', imageUrl: '' },
        { hotel_name: '4 Reasons', imageUrl: '' },
        { hotel_name: 'Shrimp Tower', imageUrl: '' },
      ]);
    });
};