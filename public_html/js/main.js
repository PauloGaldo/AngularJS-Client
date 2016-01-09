/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var miApp = angular.module('Natura', ['ngRoute', 'ngTable', 'ngCookies'])
        .config(function ($routeProvider) {
            $routeProvider
                    .when("/", {
                        controller: "loginController",
                        templateUrl: "views/inicio.html",
                        tittle: "Bienvenido"
                    })
                    .when("/usuarios", {
                        controller: "usuariosController",
                        templateUrl: "views/usuarios.html",
                        tittle: "Usuarios"
                    })
                    .when("/perfil", {
                        controller: "usuariosController",
                        templateUrl: "views/perfil.html",
                        tittle: "Details"
                    })
                    .when("/login", {
                        controller: "loginController",
                        templateUrl: "views/login.html"
                    })
                    .when("/productos", {
                        controller: "productosController",
                        templateUrl: "views/productos.html",
                        tittle: "Productos"
                    })
                    .otherwise({
                        redirectTo: "/",
                        templateUrl: "views/inicio.html"
                    });
        })
        .run(function ($rootScope, $location, $cookies, $window, loginService, factoryCache) {
            $rootScope.render = $cookies.get('render');
            var token = $cookies.getObject('token');
            $rootScope.$on('$routeChangeStart', function () {
                if ($window.location.pathname !== "/NaturaWEB/index.html") {
                    if ($rootScope.render !== "true") {
                        $window.location.href = 'index.html#/';
                    }
                }
            });
            $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
                $rootScope.title = currentRoute.$$route.tittle;                
            });
        });