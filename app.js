require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressValidator = require('express-validator');
const passport = require('passport');
const csrf = require('csrf');
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session')({
  secret: process.env.SESSION_SECRET || 'workersoftheworld',
  resave: false,
  saveUninitialized: false,
});
const paypal = require('paypal-rest-sdk');
const router = require('./server/routes');
const { User } = require('./server/schemas');

paypal.configure({
  mode: 'live', // TODO Might change?
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

const app = express();

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(expressValidator());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(csrf({ cookie: true }), (req, res, next) => {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  next();
});

app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use((req, res, next) => {
  req.paypal = paypal;
  next();
});
app.use('/', router);

app.get('*', (req, res) => {
  res.render('reactapp', {
    user: req.user ? req.user.name : '',
  });
});

module.exports = app;
