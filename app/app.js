'use strict';

// Declare app level module which depends on views, and components
angular.module('NTDomo', [
    'ngRoute',
    'ngMaterial',
    'NTDomo.config',
    'NTDomo.device.service',
    'NTDomo.i2cRequest.service',
    'NTDomo.login',
    'NTDomo.home',
    'NTDomo.newDevice'

    ])
    .config(['$locationProvider', '$routeProvider', '$mdThemingProvider', 'ENV',
    function ($locationProvider, $routeProvider, $mdThemingProvider, ENV) {
        $locationProvider.hashPrefix('!');
        //palete Lime or light-green
        $mdThemingProvider.theme('default')
            .primaryPalette('lime')
            .accentPalette('light-green')
            .dark();
        $routeProvider
            .when('/login', {
                templateUrl: 'login/login.html',
                controller: 'LoginController',
                controllerAs: 'lgc'
            })
            .when('/home',{
                templateUrl: 'home/home.html',
                controller: 'HomeController',
                controllerAs: 'hm'
            })
            .otherwise({redirectTo: '/login'});

        // $routeProvider.otherwise({redirectTo: '/view1'});
}]);
