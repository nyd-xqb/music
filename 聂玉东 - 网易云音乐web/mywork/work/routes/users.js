var express = require('express');
var User = require('../models/user.js');
var check = require('../modules/check.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//进入登录页面
router.get('/login', check.logined ,function (req, res, next) {
  res.render('users/login.ejs', {
    title: '登录',
    user: req.session.user
  });
});

//登录接口
router.post('/login', check.logined, function (req, res, next) {
  var data = {
    name: req.body.name,
    password: req.body.password
  }
  User.login(data, function (err, result) {
    if (err) {
      res.json({ code: 201, message: err.message })
      return;
    }
    req.session.user = result.result;
    req.session.save();
    res.json({ code: 200, message: '登录成功' })
  })
})

//注册页面
router.get('/register', check.logined, function (req, res, next) {
  res.render('users/register.ejs', {
    title: '注册',
    user: req.session.user
  })
})


//注册接口
router.post('/register', check.logined, function (req, res, next) {
  var data = {
    name: req.body.name,
    password: req.body.password
  }
  User.register(data, function (err, result) {
    if (err) {
      res.json({ code: 201, message: err.message })
      return;
    }
    res.json({ code: 200, message: '注册成功' })
  })
})


//退出
router.get('/logout', check.login, function(req,res,next){
  req.session.destroy();
  res.clearCookie();
  res.redirect('/')
})





module.exports = router;
