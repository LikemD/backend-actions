const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');


const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    trim: true,
    required: true
  }
});



module.exports = mongoose.model('user',UserSchema);