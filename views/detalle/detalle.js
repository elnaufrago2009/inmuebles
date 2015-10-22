'use strict';

angular.module('inmueble.detalle', ['ngRoute'])

    .config(function($routeProvider){
        $routeProvider
            .when('/inicio', {
                templateUrl: 'views/detalle/detalle.html',
                controller: 'DetalleCtrl'
            })

    })

    .controller('DetalleCtrl', function($scope) {
        $scope.nombre = "moises linares";
    });