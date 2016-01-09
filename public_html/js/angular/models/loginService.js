/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
miApp.service('loginService', function ($http, $q) {

    this.getAccess = function (Auth) {
        var uri = 'http://localhost:8084/Natura/oauth/token';
        var request = $http({
            url: uri,
            method: 'post',
            headers: {
                'Authorization': 'Basic bmF0dXJhYXBwOjEyMzQ1Ng==',
                'Content-type': 'application/json'
            },
            params: {
                username: Auth.username,
                password: Auth.password,
                grant_type: 'password'}
        });
        return request;
    };

    this.logoutApi = function (Token) {
        var uri = 'http://localhost:8084/Natura/oauth/logout';
        var request = $http({
            url: uri,
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + Token,
                'Content-type': 'application/json'
            }
        });
        return request;
    };

    this.refreshToken = function (Token) {
        var uri = 'http://localhost:8084/Natura/oauth/token';
        var request = $http({
            url: uri,
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + Token,
                'Content-type': 'application/json'
            },
            params: {
                refresh_token: 'Bearer ' + Token,
                grant_type: 'refresh_token'}
        });
        return request;
    };
});


