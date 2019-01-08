const router = require('express').Router();
const controllers = require('../controllers');

const requiresLogin = (req, res, next) => {
  if (req.user) {
    return next();
  }
  return res.redirect('/login');
};

const alreadyLoggedIn = (req, res, next) => {
  if (req.user) {
    return res.redirect('/home');
  }
  return next();
};

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/home');
});
router.get('/login', alreadyLoggedIn, (req, res) => res.render('login'));
router.get('/register', alreadyLoggedIn, (req, res) => res.render('register'));
router.get('/dues', requiresLogin, (req, res) => res.render('register'));
router.post('/login', controllers.login);
router.get('/news', controllers.news);
router.post('/register', controllers.register);
router.post('/sendemail', controllers.sendEmail);
router.post('/sendapplication', controllers.sendApplication);

module.exports = router;
