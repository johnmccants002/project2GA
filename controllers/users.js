const Post = require('../models/post')
const User = require('../models/user')
const Profile = require('../models/profile')

module.exports = {
    index,
    edit,
    saveProfileInfo,
    show
};

function index(req, res) {
    Profile.findById(req.user.profile._id, function(err, profile) {
        console.log(profile);
        res.render('users/index', { title: "User", user: req.user, profile: profile});

    });    
}

function show(req, res) {
    res.redirect('/')
}

function edit(req, res) {
    console.log(req.user)
    res.render('users/edit', { title: "Edit", user: req.user });
}

function saveProfileInfo(req, res) {
    console.log(req.user.profile._id);
        Profile.findById(req.user.profile._id, function(err, profile){
        console.log(profile);
       console.log(req.body.about);
       let about = req.body.about;
       profile.about = about;
     

        profile.save(function(err) {
            res.redirect('/user');
        });
    });
}
