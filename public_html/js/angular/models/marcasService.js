/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.service('marcasService', function ($http, $q, $cookies) {
    
    this.getMarcas = function () {
        var datosRecu = null;
        var deferred = $q.defer();
        var token = $cookies.getObject('token');
        $http.get('http://localhost:8080/marcas/list', {
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

