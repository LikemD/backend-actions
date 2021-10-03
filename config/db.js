const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const connectDB = async () => {
    try {
            const conn = await mongoose.connect(process.env.MONGO_URI, 
                                        {   useNewUrlParser: true,
                                            useCreateIndex: true,
                                            useUnifiedTopology: true });

            console.log(`Database Up`.cyan.underline.bold);
    } catch (error) {
        console.log(`${error}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;
