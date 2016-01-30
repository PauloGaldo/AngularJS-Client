/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.controller('loginController', function ($scope, loginService, $location, $rootScope, $cookies, $window) {

    $scope.usuario = {username: '', password: ''};

    $scope.go = function (path) {
        $location.path(path);
        console.log("go");
    };

    $scope.iniciarSesion = function () {
        $promesa = loginService.getAccess($scope.usuario);
        $promesa.success(function (datos) {
            $cookies.put('render', true);
            $cookies.putObject('token', datos);
            $rootScope.render = true;
            var role = datos.role[0].authority;
            if(role === 'ROLE_ADMIN'){
                $window.location.href = 'home.html';
            }else{
                $window.location.href = 'ventas.html';
            }            
        }).error(function (datos) {
            $scope.error = datos.error_description;
        });
    };

    $scope.logoutSession = function () {
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

