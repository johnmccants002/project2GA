const express = require('express');
const router = express.Router();
const passport = require('passport');

const postsCtrl = require('../controllers/posts');
const isLoggedIn = require('../config/auth');

router.get('/', postsCtrl.index);
// Use isLoggedIn middleware to protect routes
router.get('/new', isLoggedIn, postsCtrl.new);
router.get('/:id', postsCtrl.show);
router.get('/:id/edit', postsCtrl.edit)
router.post('/', postsCtrl.create);
router.put('/:id', isLoggedIn, postsCtrl.savePostInfo);
router.delete('/:id', postsCtrl.delete);


module.exports = router;
  