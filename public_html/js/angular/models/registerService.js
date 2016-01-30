/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.service('registerService', function ($http, $q) {
    this.registerUser = function (Usuarios) {
        var uri = 'https://naturaapp.herokuapp.com/register/add';
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

