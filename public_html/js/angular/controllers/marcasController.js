/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.controller('marcasController', ['$scope', 'marcasService', '$rootScope', 'ngTableParams', 'factoryCache', function ($scope, marcasService, $rootScope, ngTableParams, factoryCache) {

        console.log("marcasController");


        $scope.listMarcas = function () {
            var listCache = factoryCache.get('_listMar');
            if (listCache) {
                $scope.marcas = listCache;
            } else {
                marcasService.getMarcas().then(function (datos) {
                    $scope.marcas = datos;
                    factoryCache.put('_listMar', datos);
                });
            }
        };
       
    }]);


