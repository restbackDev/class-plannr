const mongoose = require('mongoose');
const applicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
  },
  time: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true,
    enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
  },
  application: [applicationSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
