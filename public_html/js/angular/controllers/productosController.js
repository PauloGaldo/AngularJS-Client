/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.controller('productosController', ['$scope', 'productosService', 'usuariosService', '$rootScope', 'ngTableParams', 'factoryCache', function ($scope, productosService, usuariosService, $rootScope, ngTableParams, factoryCache) {

        console.log("productosController");

        $rootScope.$on('$routeChangeStart', function () {
            usuariosService.getDetail().then(function (datos) {
                factoryCache.put('_details', datos);
                console.log(factoryCache.get('_details'));
            });
        });

        $scope.listProduct = function () {
            var listCache = factoryCache.get('_list');
            if (listCache) {
                $scope.productos = listCache;
            } else {
                productosService.getProductos().then(function (datos) {
                    $scope.productos = datos;
                    factoryCache.put('_list', datos);
                });
            }
        };
    }]);

