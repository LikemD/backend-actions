const express = require('express');
const app = express();
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');

dotenv.config({path:'./config/config.env'});

connectDB();

const txnRouter = require('./routes/transationRoute');
const userRouter = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');


app.use(express.json());
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'));
    app.use(cors({
        origin: '*'
    }));
}


// transaction router
app.use('/api/v1/users',userRouter);
app.use('/api/v1/txns', txnRouter);
app.use('/api/v1/sessions', sessionRoutes);

//static file server
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));


    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}


app.listen(PORT, console.log(`Server running on port ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

