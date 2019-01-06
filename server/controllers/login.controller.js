const passport = require('passport');

module.exports = async (req, res) => {
  passport.authenticate('local')(req, res, () => {
    res.redirect('/');
  });
};
