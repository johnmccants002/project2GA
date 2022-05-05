const express = require('express');
const router = express.Router();
const passport = require('passport');
const userCtrl = require('../controllers/users');
/* GET users listing. */
router.get('/', userCtrl.index);

module.exports = router;
