var mongoose = require('../modules/database.js');
var Schema = mongoose.Schema;
var schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }

})
schema.statics = {
    login: function (data, cb) {

        var filter = { name: data.name, password: data.password }
        Model.findOne(filter, function (err, result) {
            if (err) {
                return cb({ code: 201, message: err })
            }
            if (!result) {
                return cb({ code: 201, message: '账号或密码错误' })
            }
            return cb(null, { code: 200, result });
        })
    },
    register: function (data, cb) {
        var filter = { name: data.name }
        Model.findOne(filter, function (err, result) {
            if (err) {
                return cb({ code: 201, message: err.message })
            }
            if (result) {
                return cb({ code: 201, message: '注册账号已存在！' })
            } else {
                Model.insertMany(data, function (err, result) {
                    if (err) {
                        return cb({ code: 201, message: err.message })
                    }
                    return cb(null,result)
                })
            }
        })
    }
}
var Model = mongoose.model('users', schema);
module.exports = Model;