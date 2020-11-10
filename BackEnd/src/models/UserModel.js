const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  passwordConfirm: {
    type: String,
    required: true,
    minlength: 8
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;