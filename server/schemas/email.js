const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_HOST, { useNewUrlParser: true });

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
