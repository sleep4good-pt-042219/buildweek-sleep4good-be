const router = require('express').Router();
const Payments = require('./../../data/helpers/paymentsDbHelper');
const restricted = require('../../auth/restrictedMiddleware');

router.get('/', restricted, async (req, res) => {
    try {

      const payments = await Payments.fetchAllPayments();

      if (payments) {
          res.status(200).json(payments);
      }
      else {
          res.status(404).json(`This hotel's Payments are not available.`)
      }
    } catch (e) {
      res.status(500).json(e);
    }
});

router.post('/', restricted, async (req, res) => {
    const newPayment = req.body;
    try {

      const payment = await Payments.insertPayment(newPayment);

      if (payment) {
          res.status(200).json({message: 'Payment was processessed successfully', payment});
      }
      else {
          res.status(404).json(`All fields are required.`)
      }
    } catch (e) {
      res.status(500).json(e);
    }
});


router.get('/:id/', restricted, async (req, res) => {
  const id = req.params.id;

  try {
    const payment = await Payments.getPaymentById(id);
    if (payment) {
        res.status(201).json(payment);
    }
    else {
        res.status(404).json(`This payment is not available.`)
    }
  } catch (e) {
    res.status(500).json(e);
  }
});


router.delete('/:id/', restricted, async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await Payments.deletePayment(id);
    if (deleted) {
        res.status(201).json({ message: 'This payment was deleted.' });
    }
    else {
        res.status(404).json(`This hotel location is not available.`)
    }
  } catch (e) {
    res.status(500).json(e);
  }
});


  module.exports = router;