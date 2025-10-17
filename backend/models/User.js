const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // bắt buộc có tên
    trim: true
  },
  email: {
    type: String,
    required: true, // bắt buộc có email
    unique: true,   // tránh trùng email
    trim: true
  }
});

module.exports = mongoose.model('User', userSchema);
