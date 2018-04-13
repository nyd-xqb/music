var express = require('express');
var User = require('../models/user.js');
var check = require('../modules/check.js');
var router = express.Router();

//推荐
router.get('/', function (req, res, next) {
    res.render('index.ejs', {
        title: '网易云音乐',
        user: req.session.user
    })
})

router.get('/toplist', function (req, res, next) {
    res.render('pages/toplist.ejs', {
        title: '网易云音乐',
        user: req.session.user
    })
})

module.exports = router;