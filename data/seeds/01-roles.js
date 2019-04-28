exports.seed = function(knex, Promise) {
  return knex('roles')
  .truncate()
  .then(function() {
    return knex('roles').insert([
      { name: 'admin' }, // 1
      { name: 'partners' }, // 2
      { name: 'patron' }, // 3
    ]);
  })
};
  