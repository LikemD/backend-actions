const express = require('express');
const router = express.Router();
const { getTransactions , deleteTransactions , addTransactions , sortTransactions} = require('../controllers/transactionCtrl');

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions);

router
    .route('/:id')
    .delete(deleteTransactions);

router
    .route('/sortDate')
    .get(sortTransactions)

module.exports = router;