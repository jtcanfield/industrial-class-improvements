const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
var logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.render('index');
});

// error handler

module.exports = app;
