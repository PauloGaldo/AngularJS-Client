/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.controller('registerController', function ($scope, registerService, $location) {

    console.log("registerController");

    $scope.user = {
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

    $scope.register = function () {
        console.log("register");
        var setRol = new Roles(
                2,
                "vendedor",
                "2015-01-01",
                null,
                null,
                null
                );
        var newUser = new Usuarios(
                $scope.user.usuarioId = 1,
                $scope.user.roles = setRol,
                $scope.user.documento,
                parseInt($scope.user.clave),
                $scope.user.nombre,
                $scope.user.domicilioParticular,
                $scope.user.domicilioEntrega,
                $scope.user.email,
                $scope.user.telefono,
                $scope.user.usuarioCreacion = 1,
                $scope.user.fechaCreacion,
                $scope.user.usuarioModificacion,
                $scope.user.fechaModificacion,
                $scope.user.inhabilitado = "SI",
                $scope.user.fechaCambioClave,
                $scope.user.mailValidado = "NO"
                );
        $promesa = registerService.registerUser(newUser);
        $promesa.then(function (data) {
            if(data.status === 200){
                $location.path('/');
            }
            console.log(data);
        });
    };

});



