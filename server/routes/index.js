const router = require('express').Router();
const controllers = require('../controllers');

router.post('/sendemail', controllers.sendEmail);
router.post('/sendapplication', controllers.sendApplication);

module.exports = router;
