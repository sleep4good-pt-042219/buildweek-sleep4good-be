const db = require('../dbConfig.js');

module.exports = {
  fetchAll,
  getById,
  insert,
  findBy
};

function fetchAll() {
  return db('hotels');
}

function getById(id) {
  return db('hotels')
    .where({ id })
    .first();
}

async function insert(hotel) {
  return db('hotels')
    .insert(hotel)
    .then(ids => {
      return getById(ids[0]);
    });
}
function findBy(filter) {
    return db('hotels').where(filter);
}
