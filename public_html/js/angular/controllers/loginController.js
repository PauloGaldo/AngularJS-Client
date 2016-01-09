/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.controller('loginController', function ($scope, loginService, $location, $rootScope, $cookies, $window) {

    console.log("loginController");    
    $scope.usuario = {username: '', password: ''};

    $scope.go = function (path) {
        $location.path(path);
        console.log("go");
    };

    $scope.iniciarSesion = function () {
        console.log("iniciarSesion");
        $promesa = loginService.getAccess($scope.usuario);
        $promesa.success(function (datos) {
            $cookies.put('render', true);
            $cookies.putObject('token', datos);
            $rootScope.render = true;
            $window.location.href = 'home.html';
        }).error(function (datos) {
            $scope.error = datos.error_description;
        });
    };

    $scope.logoutSession = function () {
        console.log("logoutSession");
        var token = $cookies.getObject('token');
        $promesa = loginService.logoutApi(token.access_token);
        $promesa.then(function (datos) {
            $rootScope.render = false;
            $cookies.remove('token');
            $cookies.remove('render');
            $window.location.href = 'index.html';
        });
    };
});

