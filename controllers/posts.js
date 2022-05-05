const Post = require('../models/post')
const User = require('../models/user')

module.exports = {
    index,
    show,
    new: newPost,
    create
};

function index(req, res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', { title: "Posts", posts});
    });
}

function show(req, res) {
    Post.findById(req.params.id)
      .exec(function(err, post) {
            res.render('posts/show', { title: 'Post', post});
          });
  }
  
  function newPost(req, res) {
    res.render('posts/new', { title: 'Add Post' });
  }
  
  function create(req, res) {
    const post = new Post(req.body);
    post.save(function(err) {
      if (err) return res.redirect('/posts/new');
      res.redirect(`/posts/${post._id}`);
    });
  }
  