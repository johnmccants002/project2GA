const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  about: String,
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = mongoose.model('Profile', profileSchema);