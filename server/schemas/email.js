const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/iwwdb', { useNewUrlParser: true });

const schema = new mongoose.Schema(
  {
    email: String,
    phone: String,
    message: String,
    delivered: Boolean,
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model('Email', schema);
