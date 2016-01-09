/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.controller('usuariosController', ['$scope', 'usuariosService', 'factoryCache', '$rootScope', 'ngTableParams', function ($scope, factoryCache, usuariosService, $rootScope, ngTableParams) {

        console.log("usuariosController");

        $scope.users = {
            "usuarioId": "",
            "roles": "",
            "documento": "",
            "clave": "",
            "nombre": "",
            "domicilioParticular": "",
            "domicilioEntrega": "",
            "email": "",
            "telefono": "",
            "usuarioCreacion": "",
            "fechaCreacion": "",
            "usuarioModificacion": "",
            "fechaModificacion": "",
            "inhabilitado": "",
            "fechaCambioClave": "",
            "mailValidado": ""
        };

        $scope.details = function () {
            console.log(factoryCache.get('_details'),"detail_us_contro");
            var listCache = factoryCache.get('_details');
            if (listCache) {
                $scope.usuarios = listCache;
                console.log("cache");
            } else {
                console.log("http");
                usuariosService.getDetail().then(function (datos) {
                    $scope.usuarios = datos;
                    factoryCache.put('_details', datos);
                });
            }
        };

//        usuariosService.getUsers().then(function (datos) {
//            $scope.usuarios = datos;
//            console.log("getUsers");
//            var data = $scope.usuarios;
//        });

        usuariosService.getDetail().then(function (datos) {
            $scope.userDetails = datos.data;
            console.log("getDetail");
        });


    }]);

