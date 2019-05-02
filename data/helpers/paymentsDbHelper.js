const db = require('../dbConfig.js');

module.exports = {
    fetchAllPayments,
    getPaymentById,
    deletePayment,
    insertPayment
};

async function fetchAllPayments() {
    return db('payments');
}
async function deletePayment(id) {
    return db('payments')
      .where({ id })
      .del()
}

async function insertPayment(payment) {
    return db('payments')
        .insert(payment, 'id')
        .then(ids => {
          console.log(ids)
          return getPaymentById(ids[0]);
        });
}
async function getPaymentById(id) {
    return db('payments')
      .where({ id })
      .first()
}