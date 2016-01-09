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
                        templateUrl: "views/login.html"
                    })
                    .when("/login", {
                        controller: "loginController",
                        templateUrl: "views/login.html"
                    })
                    .when("/register", {
                        controller: "registerController",
                        templateUrl: "views/register.html"
                    })
                    .otherwise({
                        redirectTo: "/",
                        templateUrl: "views/login.html"
                    });
        })
        .run(function ($rootScope, $location, $cookies, $window, loginService) {
            $rootScope.render = $cookies.get('render');
            console.log($window.location.pathname);
            $rootScope.$on('$routeChangeStart', function () {
                if ($window.location.pathname === "/NaturaWEB/" || $window.location.pathname === "/NaturaWEB/index.html") {
                    if ($rootScope.render === "true") {
                        $window.location.href = 'home.html#/';
                    }
                }
            });
        });

