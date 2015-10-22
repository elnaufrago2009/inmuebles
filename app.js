'use strict';
angular.module("inmueble",
    [
        'ngRoute',
        'inmueble.inicio'
    ])

    .config(function($routeProvider){
        $routeProvider
            .otherwise({ redirectTo: '/inicio'});
    });




