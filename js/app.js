/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('app', ['ngRoute', 'ngAnimate', 'customFilters']);

app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/home/:id', {
                    templateUrl: 'views/overview.html',
                    controller: 'overviewCtrl'
                }).
                when('/home', {
                    templateUrl: 'views/overview.html',
                    controller: 'overviewCtrl'
                }).
                when('/grain', {
                    templateUrl: 'views/grain.html',
                    controller: 'grainCtrl'
                }).
                when('/system', {
                    templateUrl: 'views/system.html',
                    controller: 'systemCtrl'
                }).
                when('/hops', {
                    templateUrl: 'views/hops.html',
                    controller: 'hopsCtrl'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);

