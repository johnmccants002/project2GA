const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const isLoggedIn = require('../config/auth');

router.get('/', postsCtrl.index);
// Use isLoggedIn middleware to protect routes
router.get('/new', isLoggedIn, postsCtrl.new);
router.get('/:id', postsCtrl.show);
router.post('/', isLoggedIn, postsCtrl.create);

module.exports = router;