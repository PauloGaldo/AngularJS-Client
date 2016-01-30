/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.controller('productosController', ['$scope', '$routeParams', 'productosService', 'usuariosService', '$rootScope', 'ngTableParams', 'factoryCache', function ($scope, $routeParams, productosService, usuariosService, $rootScope, ngTableParams, factoryCache) {

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
        $scope.searchProduct = function () {
            var idProd = $routeParams.idProducto;
            productosService.getProdById(idProd).then(function (datos) {
                $scope.producto = datos;
            });
        };


        productosService.getImageById(1).then(function (datos) {
            $scope.img = datos.data;
        });
    }]);

