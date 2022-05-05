const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    postText: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'Profile'},
    userName: String, 
    userAvatar: String
}, {
    timestamps: true
});


module.exports = mongoose.model('Post', postSchema);