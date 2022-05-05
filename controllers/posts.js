const Post = require('../models/post')
const User = require('../models/user')

module.exports = {
    index,
    show,
    new: newPost,
    create,
    delete: deletePost
};

function index(req, res) {
    // Post.find({}, function(err, posts) {
        res.render('posts/index', { title: "Posts"});
}

function show(req, res) {
    Post.findById(req.params.id)
      .exec(function(err, post) {
            res.render('posts/show', { title: 'Post', post});
          });
  }
  
  function newPost(req, res) {
    console.log("in the new post function")

    res.render('posts/new', {})

  }
  
  function create(req, res) {
    const post = new Post(req.body);
    post.save(function(err) {
      if (err) return res.redirect('/posts/new');
      res.redirect(`/posts/${post._id}`);
    });
  }
  
  function deletePost(req, res) {
    Post.findByIdAndRemove(req.params._id)
  }