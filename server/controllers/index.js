const login = require('./login.controller');
const register = require('./register.controller');
const sendApplication = require('./sendapplication.controller');
const sendEmail = require('./sendemail.controller');

module.exports = {
  login,
  register,
  sendApplication,
  sendEmail,
};
