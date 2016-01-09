/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.service('productosService', function ($http, $q) {

    console.log("productosService");
    this.getProductos = function () {
        console.log("getProductos");
        var datosRecu = null;
        var deferred = $q.defer();
        $http.get('http://localhost:8084/Natura/api/prod/list').success(function (datos) {
            datosRecu = datos;
            deferred.resolve(datosRecu);
        });
        return deferred.promise;
    };
    this.getImageById = function (id) {
        console.log("getImageById");
        var datosRecu = null;
        var deferred = $q.defer();
        var url = 'http://localhost:8084/Natura/api/prod/image/'+id+'.jpg';
        $http({
            url: url,
            method: 'GET',
            cache: true            ,
            headers: {
                'Content-type': 'image/jpeg'
            }
        }).then(function (datos){
            datosRecu = datos;            
            deferred.resolve(datosRecu);
            console.log("success");
            console.log(datos);
            alert("para!");
        });        
        return deferred.promise;

    };
});

