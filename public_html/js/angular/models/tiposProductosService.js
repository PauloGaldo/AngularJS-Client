/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.service('tiposProductosService', function ($http, $q, $cookies) {
    
    this.getTipos = function () {
        var datosRecu = null;
        var deferred = $q.defer();
        var token = $cookies.getObject('token');
        $http.get('http://localhost:8084/Natura/tipos/list', {
            headers: {
                'Authorization': 'Bearer ' + token.access_token
            }
        }).success(function (datos) {
            datosRecu = datos;
            deferred.resolve(datosRecu);
        });
        return deferred.promise;
    };
    
});

