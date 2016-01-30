/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.service('usuariosService', function ($http, $q, $cookies) {

    this.getUsers = function () {
        var datosRecu = null;
        var deferred = $q.defer();
        var token = $cookies.getObject('token');
        $http.get('https://naturaapp.herokuapp.com/usuarios/list', {
            headers: {
                'Authorization': 'Bearer ' + token.access_token
            }
        }).success(function (datos) {
            datosRecu = datos;
            deferred.resolve(datosRecu);
        });
        return deferred.promise;
    };

    this.getDetail = function () {
        var uri = 'https://naturaapp.herokuapp.com/usuarios/details';
        var token = $cookies.getObject('token');
        var request = $http({
            url: uri,
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token.access_token,
                'credential': token.credential
            }
        });
        return request;
    };
});

