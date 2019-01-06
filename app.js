require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressValidator = require('express-validator');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session')({
  secret: process.env.SESSION_SECRET || 'workersoftheworld',
  resave: false,
  saveUninitialized: false,
});
const router = require('./server/routes');
const { User } = require('./server/schemas');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(expressValidator());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(express.static(path.join(__dirname, 'dist')));
app.post('*', router);

app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/register', (req, res) => {
  res.render('register');
});
app.get('*', (req, res) => {
  res.render('reactapp');
});

module.exports = app;
