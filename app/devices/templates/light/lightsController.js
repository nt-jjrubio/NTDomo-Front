/**
 * @author Saul Llamas Parra
 * @author jjrubio
 * @since 04-04-2017
 */
(function () {
    'use strict';
    angular
        .module('NTDomo')
        .controller('LightsController', LightsController);

    LightsController.$inject = ['$rootScope'];

    function LightsController($rootScope) {

        console.log("Entra en el controlador de luces");
        var vm = this;
        vm.device = $rootScope.device;

        $rootScope.$on('deviceSelected', function (event, data) {
           vm.device = data;
            console.log('deviceSelected ', vm.device);
        });

    }


})();

