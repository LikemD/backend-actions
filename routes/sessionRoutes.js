const {Router} = require('express');
const router = Router();
const { getUserSessions } = require('../controllers/sessionCtrl')

  router.route('/user').post(getUserSessions);

module.exports = router;