let express = require('express'),
    path = require('path');
    /*favicon = require('serve-favicon'),
     logger = require('morgan'),
    session = require('express-session'),
    bodyParser = require('body-parser');
    //var routes = require('./routes/index');
       var passport = require('passport');*/

const app = express();
//this 3 line is for connecting the mongoose url in config folder
/*var dbConfig = require('./config/dbpath.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);*/


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/*app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());*/
//app.use(cookieParser());
/*app.use(session({
    secret: 'text',
    saveUninitialized: true,
    resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))*/;
app.use(express.static(path.join(__dirname, '../',"dist/")));
//app.use('/', routes);



/*var flash = require('connect-flash');
app.use(flash());*/

// Initialize Passport
/*var initPassport = require('./controller/init');
initPassport(passport);

var routes = require('./routes/index')(passport);
app.use('/', routes);*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
let express = require('express'),
    path = require('path');
    /*favicon = require('serve-favicon'),
     logger = require('morgan'),
    session = require('express-session'),
    bodyParser = require('body-parser');
    //var routes = require('./routes/index');
       var passport = require('passport');*/

const app = express();
//this 3 line is for connecting the mongoose url in config folder
/*var dbConfig = require('./config/dbpath.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);*/


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/*app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());*/
//app.use(cookieParser());
/*app.use(session({
    secret: 'text',
    saveUninitialized: true,
    resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))*/;
app.use(express.static(path.join(__dirname, '../',"dist/")));
//app.use('/', routes);



/*var flash = require('connect-flash');
app.use(flash());*/

// Initialize Passport
/*var initPassport = require('./controller/init');
initPassport(passport);

var routes = require('./routes/index')(passport);
app.use('/', routes);*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
