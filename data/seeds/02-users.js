exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function() { 
      return knex('users').insert([
        { username: 'Aegon', password: 'aegonpass', role_id: 1 },
        { username: 'Samwell', password: 'samwellpass', role_id: 2 },
        { username: 'Sansa', password: 'sansapass', role_id: 3 },
        { username: 'Sir Davos', password: 'sirdavospass', role_id: 2 },
        { username: 'Arya', password: 'aryapass', role_id: 1 },
        { username: 'Bronn', password: 'bronpass', role_id: 2 }
      ]);
    });
};
  