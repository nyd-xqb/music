var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/mywork', { useMongoClient: true, promiseLibrary: global.Promise });
var db = mongoose.connection;
db.on('error', function (err) {
    console.log('打开数据库失败，原因：' + err);
});
db.once('open', function () {
    console.log('打开数据库成功');
});
module.exports = mongoose;