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

    TemperaturesController.$inject = ['$rootScope'];

    function TemperaturesController($rootScope) {

        console.log("Entra en el controlador de temperaturas");
        var vm = this;
        vm.device = $rootScope.device;

        $rootScope.$on('deviceSelected', function (event, data) {
           vm.device = data;
            console.log('deviceSelected ', vm.device);
        });


        vm.whatDevice = function(){
            console.log("Device selected = ", vm.device);
        }

    }


})();

