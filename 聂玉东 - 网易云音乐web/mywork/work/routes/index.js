var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index.ejs', {
    title: '网易云音乐',
    user: req.session.user
  })
});

//我的音乐
router.get('/mymusic', function (req, res, next) {
  res.render('pages/mymusic.ejs', {
    title: '网易云音乐',
    user: req.session.user
  })
})
//朋友
router.get('/myfriends', function (req, res, next) {
  res.render('pages/myfriends.ejs', {
    title: '网易云音乐',
    user: req.session.user
  })
})
//下载客户端
router.get('/download', function (req, res, next) {
  res.render('pages/download.ejs', {
    title: '网易云音乐',
    user: req.session.user
  })
})




module.exports = router;
