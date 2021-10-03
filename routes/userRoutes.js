const express = require('express')
const router = express.Router();
const {getUsers , addUser , login} = require('../controllers/userCtrl');


router
  .route('/')
  .get(getUsers)
  
router
  .route('/register')
  .post(addUser);

router
  .route('/login')
  .post(login)

module.exports = router;