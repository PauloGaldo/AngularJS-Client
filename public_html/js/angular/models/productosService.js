/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.service('productosService', function ($http, $q, $cookies) {

    this.getProductos = function () {
        var datosRecu = null;
        var deferred = $q.defer();
        var token = $cookies.getObject('token');
        $http.get('http://localhost:8080/productos/list', {
            headers: {
                'Authorization': 'Bearer ' + token.access_token
            }
        }).success(function (datos) {
            datosRecu = datos;
            deferred.resolve(datosRecu);
        });
        return deferred.promise;
    };
    this.getImageById = function (id) {
        var datosRecu = null;
        var deferred = $q.defer();
        var token = $cookies.getObject('token');
        var url = 'http://localhost:8080/productos/image/' + id + '.jpg';
        $http({
            url: url,
            method: 'GET',
            cache: true,
            headers: {
//                'Content-type': 'image/jpeg',
                'Authorization': 'Bearer ' + token.access_token
            }
        }).then(function (datos) {
            datosRecu = datos;
            deferred.resolve(datosRecu);
        });
        return deferred.promise;
    };
    this.getProdById = function (idProducto) {
        var datosRecu = null;
        var deferred = $q.defer();
        var token = $cookies.getObject('token');
        $http.get('http://localhost:8080/productos/search', {
            params: {
                'id': idProducto
            },
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

