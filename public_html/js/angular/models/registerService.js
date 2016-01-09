/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.service('registerService', function ($http, $q) {
    console.log("registerService");
    this.registerUser = function (Usuarios) {
        console.log("registerUser");
        var uri = 'http://localhost:8084/Natura/register/add';
        var request = $http({
            url: uri,
            method: 'post',
            data: angular.toJson(Usuarios),
            headers: {                
                'Content-type': 'application/json'
            }
        });
        return request;
    };
});

