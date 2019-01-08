const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_HOST, { useNewUrlParser: true });

const schema = new mongoose.Schema(
  {
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    email: String,
    phone: String,
    employer: String,
    occupation: String,
    duesValue: String,
    why: String,
    heardfrom: String,
    involved: String,
    skills: String,
    otherorganizations: String,
    internet: String,
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model('Application', schema);
