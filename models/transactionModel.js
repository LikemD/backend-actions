const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    text:{
        type: String,
        trim: true,
        required: true
    },
    amount:{
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    transactionDate:{
        type: Date,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transactions', transactionSchema);