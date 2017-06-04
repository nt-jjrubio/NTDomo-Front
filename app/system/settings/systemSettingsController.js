(function () {
    'use strict';

    angular
        .module('NTDomo.systemSettingsCtrl', [])
        .controller('systemSettingsController', systemSettingsController);

    systemSettingsController.$inject = ['$location', '$rootScope', '$mdToast', '$mdDialog'];

    /* @ngInject */
    function systemSettingsController($location, $rootScope,  $mdToast, $mdDialog) {

        var vm = this;


        vm.close = function()
        {
            $mdDialog.cancel();
        };

        vm.reboot = function() {
            vm.close();
            $mdToast.show(
                $mdToast.simple()
                    .textContent('El sistema se esta reiniciando... ')
                    .position('top right')
                    .hideDelay(10000)
            );
            $http({
                method: 'GET',
                url: '/api/reboot'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        };

        vm.shutdown = function() {
            vm.close();
            $mdToast.show(
                $mdToast.simple()
                    .textContent('El sistema se esta apagando, la aplicación dejara de responder.')
                    .position('top right')
                    .hideDelay(10000)
            );

            $http({
                method: 'GET',
                url: '/api/shutdown'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        };


        console.log('Shutdown menu')
    }





})();

