exports.seed = function(knex, Promise) {
    return knex('hotels').insert([
      { name: 'Marry-a-lott', imageUrl: '' },
      { name: 'Holiday Binn', imageUrl: '' },
      { name: 'Shillton', imageUrl: '' },
      { name: '4 Reasons', imageUrl: '' },
      { name: 'Shrimp Tower', imageUrl: '' },
    ]);
};
  