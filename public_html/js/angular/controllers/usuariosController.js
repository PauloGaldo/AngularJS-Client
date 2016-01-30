/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.controller('usuariosController', ['$scope', 'usuariosService', 'factoryCache', '$rootScope', 'ngTableParams', function ($scope, usuariosService, factoryCache, $rootScope, ngTableParams) {

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
            console.log("details");
            var listCache = factoryCache.get('_details');
            if (listCache) {
                $scope.userDetails = listCache.data;
            } else {
                usuariosService.getDetail().then(function (datos) {
                    $scope.userDetails = datos.data;
                });
            }
        };

        $scope.userList = function () {
            var userList = factoryCache.get('_uList');
            console.log(userList);
            if (userList) {
                $scope.usuarios = userList;
            } else {
                usuariosService.getUsers().then(function (datos) {
                    $scope.usuarios = datos;
                    factoryCache.put('_uList', datos);
                    var data = $scope.usuarios;
                });
            }
        };
        
        
    }]);

