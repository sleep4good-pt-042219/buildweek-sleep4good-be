const db = require('../dbConfig.js');

module.exports = {
  fetchAll,
  getById,
  insert,
  findBy
};

function fetchAll() {
  return db('users').select('id', 'username', 'password', 'role_id');
}

function getById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function insert(user) {
  return db('users')
    .insert(user, ['id'])
    .then(ids => {
      return getById(ids[0]);
    });
}
function findBy(filter) {
    return db('users').where(filter);
}
