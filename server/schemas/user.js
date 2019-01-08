const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect(process.env.MONGODB_HOST, { useNewUrlParser: true });

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      index: { unique: true },
    },
    password: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: { unique: true },
    },
    xnum: {
      type: Number,
      required: true,
    },
    iunum: {
      type: Number,
      required: true,
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

schema.plugin(passportLocalMongoose);

// schema.pre('save', (next) => {
//   const user = this;
//   // only hash the password if it has been modified (or is new)
//   if (!user.isModified('password')) {
//     return next();
//   }
//   // generate a salt
//   return bcrypt.genSalt(10, (err, salt) => {
//     if (err) {
//       return next(err);
//     }
//     // hash the password along with our new salt
//     return bcrypt.hash(user.password, salt, (err2, hash) => {
//       if (err2) {
//         return next(err2);
//       }
//       // override the cleartext password with the hashed one
//       user.password = hash;
//       return next();
//     });
//   });
// });

module.exports = mongoose.model('User', schema);
