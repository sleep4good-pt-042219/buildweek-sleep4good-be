exports.seed = function(knex, Promise) {
    return knex('donations')
    .truncate()
    .then(function() { 
      return knex('donations').insert([
      { code: 'BINGO001', discount: 10 }, // 1
      { code: 'WINNING666', discount: 20 }, // 2
      { code: 'MADNESS420', discount: 15 }, // 3
      { code: 'REALDEAL444', discount: 5 },
      { code: 'ENERGY134', discount: 15 },
      { code: 'SUPERMOJO', discount: 25 },
      { code: 'BUNKER10', discount: 10 },
    ]);
  });
};
  