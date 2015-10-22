'use strict';

angular.module('inmueble.inicio', ['ngRoute'])

.config(function($routeProvider){
        $routeProvider
            .when('/inicio', {
                templateUrl: 'views/inicio/inicio.html',
                controller: 'InicioCtrl'
            })

    })

.controller('InicioCtrl', function($scope) {
        $scope.nombre = "moises linares";
    });