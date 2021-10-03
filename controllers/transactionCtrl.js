const Transactions = require('../models/transactionModel');
//@desc GET all txns
//@endpoint GET /api/v1/txns
//@access Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transactions.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

//@desc ADD txns
//@endpoint POST /api/v1/txns
//@access Public
exports.addTransactions = async (req, res, next) => {
    try {
            const {text , amount } = req.body;
            const transactions = await Transactions.create(req.body);

            return res.status(201).json({
                success: true,
                data: transactions
            });
    } catch (err) {
        console.log(err);
        if (err.name == 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val._message);
            return res.status(400).json({
                success: false,
                error: messages
            });
        } else{
            return res.status(500).json({
                success: false,
                data: transactions
            }); 
        } 
    }
}


//@desc DELETE txn
//@endpoint DELETE /api/v1/txns/:id
//@access Public
exports.deleteTransactions = async (req, res, next) => {
    try {
        
    const transactions = await Transactions.findByIdAndDelete(req.params.id);

    return res.status(200).json({
        success: true,
        data: transactions
    });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: transactions
        });  
    }
};

//@desc FindByDate txn
//@endpoint FindByDate /api/v1/txns
//@access Public

exports.sortTransactions = async (req , res) => {
    const {startDate , endDate} = req.query
    if (endDate > startDate){
        try{
            const transactions = await Transactions.find({
                transactionDate: {
                    $gte: new Date(startDate),
                    $lt: new Date(endDate)
                }
            }).sort({
                transactionDate: 'asc'
            })
            if(!transactions) res.status(500).json({success: false , error: 'Sort Failed'})
            res.status(200).json({success: true , data: transactions})
        } catch (error) {
            res.status(500).json({success: false , error: 'Server Error'})
        }
    } else {
        console.log('endDate older than startDate') 
    }
}