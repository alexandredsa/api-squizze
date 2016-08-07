var express = require('express');
path = require('path'),
favicon = require('serve-favicon'),
logger = require('morgan'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
category = require('./routes/category'),
quiz = require('./routes/quiz'),
auth = require('./routes/credential'),
performance = require('./routes/performance'),
mongoose = require('mongoose'),
app = express();

mongoose.connect('mongodb://localhost:27017/squizze');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/category', category);
app.use('/quiz', quiz);
app.use('/performance', performance);
app.use('/account', auth);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
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

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
   return;
});

module.exports = app;