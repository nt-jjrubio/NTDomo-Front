/**
 * @author Saul Llamas Parra
 * @author jjrubio
 * @since 04-04-2017
 */
(function () {
    'use strict';
    angular
        .module('NTDomo')
        .controller('TemperaturesController', TemperaturesController);

    TemperaturesController.$inject = ['$rootScope', '$interval'];

    function TemperaturesController($rootScope, $interval) {
        console.log("Entra en el controlador de temperaturas");
        var vm = this;
        vm.reloadTime = 1000;
        vm.device = $rootScope.device;
        vm.refreshTimes = [500, 1000, 2000, 5000, 10000];
        $rootScope.$on('deviceSelected', function (event, data) {
           vm.device = data;
            console.log('deviceSelected ', vm.device);
        });
        vm.value=0;

        // Function to query
        var reloadQuery = function (){
            vm.value++;
        };


        $interval(reloadQuery, vm.reloadTime);


        vm.whatDevice = function(){
            console.log("Device selected = ", vm.device);
        }

        
    }


})();

