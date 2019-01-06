const router = require('express').Router();
const controllers = require('../controllers');

router.post('/login', controllers.login);
router.get('/news', controllers.news);
router.post('/register', controllers.register);
router.post('/sendemail', controllers.sendEmail);
router.post('/sendapplication', controllers.sendApplication);

module.exports = router;
