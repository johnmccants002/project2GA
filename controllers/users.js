const Post = require('../models/post')
const User = require('../models/user')

module.exports = {
    index
};

function index(req, res) {
        res.render('users/index', { title: "User"});
}

