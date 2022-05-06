const express = require('express');
const router = express.Router();
const passport = require('passport');
const userCtrl = require('../controllers/users');
/* GET users listing. */
router.get('/', userCtrl.index);
router.get('/editprofile', userCtrl.edit);
router.post('/editprofile', userCtrl.saveProfileInfo);
router.get('/:id', userCtrl.show)

module.exports = router;
