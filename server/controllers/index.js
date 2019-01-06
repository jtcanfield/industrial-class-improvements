const login = require('./login.controller');
const news = require('./news.controller');
const register = require('./register.controller');
const sendApplication = require('./sendapplication.controller');
const sendEmail = require('./sendemail.controller');

module.exports = {
  login,
  news,
  register,
  sendApplication,
  sendEmail,
};
