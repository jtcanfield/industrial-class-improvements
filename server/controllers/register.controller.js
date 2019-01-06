const passport = require('passport');
const { User } = require('../schemas');

module.exports = async (req, res) => {
  const userObj = {
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    xnum: req.body.xnum,
    iunum: req.body.iunum,
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  };
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Invalid Email').isEmail();
  req.checkBody('email', 'Email must be at least 5 characters').isLength({ min: 5 });
  req.checkBody('iunum', 'Industrial Union Number is required').notEmpty();
  req.checkBody('iunum', 'Industrial Union Number must be a number').isInt();
  req.checkBody('xnum', 'Membership Number is required').notEmpty();
  req.checkBody('xnum', 'Membership Number must be a number').isInt();
  req.checkBody('address1', 'Address is required').notEmpty();
  req.checkBody('city', 'City is required').notEmpty();
  req.checkBody('state', 'State is required').notEmpty();
  req.checkBody('zip', 'Zip is required').notEmpty();
  req.checkBody('zip', 'Zip must be a number').isInt();
  req.checkBody('zip', 'Zip must be 5 characters').isLength({ min: 5 });
  req.checkBody('password', 'Passwords Do Not Match').equals(req.body.password2);
  const result = await req.getValidationResult();
  if (!result.isEmpty()) {
    return res.render('register', { ...userObj, error: result.array()[0].msg });
  }
  return User.register(new User(userObj), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render('register', { ...userObj, error: err.message });
    }
    console.log('OOPE');
    console.log(user);
    return passport.authenticate('local')(req, res, () => {
      return res.redirect('/login', { success: 'SUCCESS' });
    });
  });
};
