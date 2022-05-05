const express = require('express');
const router = express.Router();
// const passport = require('passport');

const postsCtrl = require('../controllers/posts');
// const isLoggedIn = require('../config/auth');

router.get('/', postsCtrl.index);
// Use isLoggedIn middleware to protect routes
router.get('/new', postsCtrl.new);
router.get('/:id', postsCtrl.show);
router.post('/', postsCtrl.create);

module.exports = router;
  