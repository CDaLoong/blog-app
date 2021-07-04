var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan')
var { checkAPP, checkAdmin, checkUser } = require('./util/middleware')

// 引入路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 增加管理员路由
var adminRouter = require('./routes/admin')

// 创建实例
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 使用中间件，所有定义的路由都应使用该中间件 checkAPP
app.use('/', checkAPP, indexRouter);
app.use('/users', checkAPP, usersRouter);
app.use('/admin', [checkAPP, checkUser, checkAdmin], adminRouter)

module.exports = app;
