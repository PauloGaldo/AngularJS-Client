/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var miApp = angular.module('Natura', ['ngRoute', 'ngTable', 'ngCookies', 'angular-loading-bar'])
        .config(function ($routeProvider) {
            $routeProvider
                    .when("/", {
                        controller: "loginController",
                        templateUrl: "views/homeVentas.html",
                        tittle: "Bienvenido"
                    })
                    .when("/inicio", {
                        controller: "loginController",
                        templateUrl: "views/homeVentas.html",
                        tittle: "Bienvenido"
                    })
                    .when("/pedidos", {
                        controller: "loginController",
                        templateUrl: "views/pedidos/pedidos.html",
                        tittle: "Pedidos"
                    })
                    .when("/registrarPedido", {
                        controller: "loginController",
                        templateUrl: "views/pedidos/registrarPedido.html",
                        tittle: "Nuevo pedido"
                    })
                    .when("/perfil", {
                        controller: "usuariosController",
                        templateUrl: "views/perfil.html",
                        tittle: "Details"
                    })
                    .otherwise({
                        redirectTo: "/",
                        templateUrl: "views/login/login.html"
                    });
        })
        .run(function ($rootScope, $location, $cookies, $window, usuariosService, factoryCache) {
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
                var listCache = factoryCache.get("_details");
                if (listCache) {
                } else {
                    usuariosService.getDetail().then(function (datos) {
                        factoryCache.put('_details', datos);
                    });
                }
            });
        });

