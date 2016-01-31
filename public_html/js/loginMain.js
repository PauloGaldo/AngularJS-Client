/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var miApp = angular.module('Natura', ['ngRoute', 'ngCookies'])
        .config(function ($routeProvider) {
            $routeProvider
                    .when("/", {
                        controller: "loginController",
                        templateUrl: "views/login/login.html"
                    })
                    .when("/login", {
                        controller: "loginController",
                        templateUrl: "views/login/login.html"
                    })
                    .when("/register", {
                        controller: "registerController",
                        templateUrl: "views/login/register.html"
                    })
                    .otherwise({
                        redirectTo: "/",
                        templateUrl: "views/login/login.html"
                    });
        })
        .run(function ($rootScope, $location, $cookies, $window, loginService) {
            var forceSSL = function () {
                if ($location.protocol() !== 'https') {
                    $window.location.href = $location.absUrl().replace('http', 'https');
                    console.log("https bitch!");
                }
            };
            forceSSL();
            $rootScope.render = $cookies.get('render');
            var data = $cookies.getObject('token');
            $rootScope.$on('$routeChangeStart', function () {
                if ($window.location.pathname === "/NaturaWEB/" || $window.location.pathname === "/NaturaWEB/index.html") {
                    if ($rootScope.render === "true") {
                        if (data.role[0].authority === 'ROLE_ADMIN') {
                            $window.location.href = 'home.html#/';
                        } else {
                            $window.location.href = 'ventas.html#/';
                        }
                    }
                }
            });
        });

