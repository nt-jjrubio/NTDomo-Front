'use strict';

// Declare app level module which depends on views, and components
angular.module('NTDomo', [
    'ngRoute',
    'ngMaterial',
    'NTDomo.config',
    'NTDomo.device.service',
    'NTDomo.newDevice.service',
    'NTDomo.i2cRequest.service',
    'NTDomo.login',
    'NTDomo.home',
    'NTDomo.newDeviceCtrl',
    'satellizer'
    ])
    .config(['$locationProvider', '$routeProvider', '$mdThemingProvider', 'ENV', '$authProvider',
    function ($locationProvider, $routeProvider, $mdThemingProvider, ENV, $authProvider) {
        $locationProvider.hashPrefix('!');
        //palete Lime or light-green
        $mdThemingProvider.theme('default')
            .primaryPalette('lime')
            .accentPalette('light-green')
            .dark();

        // Assign routes
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

        // Config for satelliter authProvider
        $authProvider.loginUrl = ENV.server + 'signin';
        $authProvider.signupUrl = ENV.server + 'signup';
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'NTDomo';

        console.log($authProvider.loginUrl);
        // $routeProvider.otherwise({redirectTo: '/view1'});
}]);
