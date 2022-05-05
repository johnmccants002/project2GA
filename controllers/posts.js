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
    console.log("in the new post function")
    res.render('posts/new', {title: 'New Post', user: req.user})

  }
  
  function create(req, res) {
    const post = new Post(req.body);
    console.log(req.user);
    post.user = req.user.profile._id
    post.userName = req.user.profile.name
    post.userAvatar = req.user.profile.avatar
    post.save(function(err) {
      if (err) return res.redirect('/posts/new');
      res.redirect(`/posts/${post._id}`);
    });
  }
  
  function deletePost(req, res) {
    Post.findByIdAndRemove(req.params._id)
  }