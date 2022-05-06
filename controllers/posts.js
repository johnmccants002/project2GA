const Post = require('../models/post')
const User = require('../models/user')

module.exports = {
    index,
    show,
    new: newPost,
    create,
    delete: deletePost,
    edit,
    savePostInfo
};

function index(req, res) {
    Post.find({}, function(err, posts) {
      res.render('posts/index', { title: "Posts", posts});
    });
        
}

function show(req, res) {
    Post.findById(req.params.id)
      .exec(function(err, post) {
            res.render('posts/show', { title: 'Post', post, user: req.user});
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
  
  function deletePost(req, res, next) {
    console.log("In delete post")
    Post.findByIdAndRemove(req.params.id, function() {
      res.redirect('/posts')
    });
  }

  function edit(req, res) {
    console.log("in edit function posts");
    console.log(req.params.id);
    Post.findById(req.params.id, function(err, post) {
      console.log("this is the post:", post);
      if (err) {
        console.log(err)
      }
    res.render('posts/edit', { title: "Edit", post });
    });
  }

  function savePostInfo(req, res) {
    console.log("in save post info");
    console.log(req.params.id);
    Post.findById(req.params.id, function(err, post) {
      let postText = req.body.postText;
      post.postText = postText;
      post.save(function(err) {
        res.redirect('/posts');
    });
    });
  }