var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
var flash = require('connect-flash');
var csurf = require('csurf');
var csrfProtection = csurf({ cookie: true });
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());

// Config route
var routes = require('./routes/router');
var router = express.Router();
routes(router, csrfProtection);
app.use(router);


// Use session for handle session request
app.use(session(
  {
    secret: config.secret,
    key: 'session_cookie',
    saveUninitialized: false,
    resave: true
  }
));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Use cors for handle CSRF & XSRF
// var corsOptions = {
//   allowedHeaders: 'X-Requested-With, content-type, Authorization, X-API-KEY, X-XSRF-TOKEN'
// };
// app.use(cors(corsOptions));

app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// server.listen(3000,'10.10.15.106');

module.exports = app;
