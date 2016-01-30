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
                        templateUrl: "views/inicio.html",
                        tittle: "Bienvenido"
                    })
                    .when("/usuarios", {
                        controller: "usuariosController",
                        templateUrl: "views/admin/usuarios.html",
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
                        templateUrl: "views/productos/productos.html",
                        tittle: "Productos"
                    })
                    .when("/producto/:idProducto", {
                        controller: "productosController",
                        templateUrl: "views/productos/producto.html",
                        tittle: "Producto #"
                    })
                    .when("/marcas", {
                        controller: "marcasController",
                        templateUrl: "views/marcas/marcas.html",
                        tittle: "Marcas"
                    })
                    .otherwise({
                        redirectTo: "/",
                        templateUrl: "views/inicio.html"
                    });
        })
        .run(function ($rootScope, $location, $cookies, $window, usuariosService, factoryCache, $routeParams) {
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
                var number = $routeParams.idProducto;
                if (typeof number === 'undefined') {
                    $rootScope.title = currentRoute.$$route.tittle;
                } else {
                    $rootScope.title = currentRoute.$$route.tittle + $routeParams.idProducto;
                }
                var listCache = factoryCache.get("_details");
                if (listCache) {
                } else {
                    usuariosService.getDetail().then(function (datos) {
                        factoryCache.put('_details', datos);
                    });
                }
            });
        });