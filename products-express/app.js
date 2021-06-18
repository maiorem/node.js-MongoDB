const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

const app = express();

const dbUrl = 'mongodb+srv://admin:1234qwer@cluster0.9lxgd.mongodb.net/ktds?retryWrites=true&w=majority'
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(
        () => { console.log('connection ok..') },
        err => { console.log(err) }
    );

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('잘못된 경로입니다.');
});

module.exports = app;
