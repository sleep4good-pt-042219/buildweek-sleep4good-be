const db = require('../dbConfig.js');

module.exports = {
  fetchAll,
  getById,
  insert,
  update,
  remove,
  findBy,
};

async function fetchAll() {
  return db('hotels');
}

async function getById(id) {
  return db('hotels')
    .where({ id })
    .first();
}

async function remove(id) {
  return db('hotels')
    .where({ id })
    .del();
}

async function insert(hotel) {
  return db('hotels')
    .insert(hotel, ['id'])
    .then(ids => {
      return getById(ids[0]);
    });
}

async function update(id, changes) {
  return db('hotels')
    .where({ id })
    .update(changes)
    .then(function() {
      return getById(id);
    });
}

function findBy(filter) {
    return db('hotels').where(filter);
}
