const db = require('../dbConfig.js');

module.exports = {
    fetchAllPayments,
    getPaymentById,
    deletePaymentsByPaymentsId,
    insertPayment
};

async function fetchAllPayments() {
    return db('Payments');
}
async function deletePaymentsByPaymentsId(id) {
    // console.log(id)
    return db('Payments')
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
    // console.log(id)
    return db('Payments')
      .where({ id })
      .first()
}