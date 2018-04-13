var app = angular.module('mywork', []);

app.controller('mainController', mainController);
app.controller('loginController', loginController);
app.controller('registerController', registerController);
app.controller('mymusicController', mymusicController);
app.controller('myfriendsController', myfriendsController);
app.controller('downloadController', downloadController);
app.controller('toplistController', toplistController);

//总控制器
function mainController($scope, $http, $location) {
    var baseURL = 'http://localhost:8000';
    $http.get(`${baseURL}/personalized`).then(function(res){
        $scope.playlist = res.data.result;
        console.log($scope.playlist);
    }).catch(function(err){
        console.log(err);
    })
    $http.get(`${baseURL}/personalized/djprogram`).then(function(res){
        $scope.dj = res.data.result
    })
    $http.get(`${baseURL}/personalized/djprogram`).then(function(res){
        $scope.dj = res.data.result
    })
    $http.get(`${baseURL}/top/list?idx=0`).then(function(res){
        $scope.allMusic = res.data.result
    })
    $http.get(`${baseURL}/top/list?idx=2`).then(function(res){
        $scope.orgList = res.data.result
    })
    $http.get(`${baseURL}/top/list?idx=3`).then(function(res){
        $scope.surgeList = res.data.result
    })
    
}

//登录控制器
function loginController($scope, $http) {
    $scope.login = function () {
        $http.post('/users/login', {
            name: $scope.name.toString(),
            password: $scope.password.toString(),
        }).then(function (res) {
            if (res.data.code != 200) {
                layer.msg(res.data.message);
                return;
            }
            location.href = '/';
        }).catch(function (err) {
            console.log(err);
        })
    }
}

//注册控制器
function registerController($scope, $http) {
    $scope.register = function () {
        if ($scope.password != $scope.confirmPassword) {
            layer.msg('账号和密码不一致');
            return;
        }
        $http.post('/users/register', {
            name: $scope.name.toString(),
            password: $scope.password.toString()
        }).then(function (res) {
            if (res.data.code != 200) {
                layer.msg(res.data.message);
                return;
            }
            layer.msg('注册成功，请登录！');
            setInterval(function () {
                location.href = '/users/login'
            }, 3000)
        })
    }
}

//我的音乐控制器
function mymusicController($scope, $http) {

}

//朋友控制器
function myfriendsController($scope, $http) {

}

//下载客户端控制器
function downloadController($scope, $http) {

}

//排行榜控制器
function toplistController($scope, $http) {

}