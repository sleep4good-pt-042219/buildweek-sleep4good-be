exports.seed = function(knex, Promise) {
    return knex('roles').insert([
      { name: 'admin' }, // 1
      { name: 'patron' }, // 2
    ]);
  };
  