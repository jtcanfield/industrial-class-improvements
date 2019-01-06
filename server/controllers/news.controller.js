const news = require('../../news.json');

module.exports = (req, res) => {
  res.send(news);
};
