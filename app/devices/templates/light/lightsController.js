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

        vm.whatDevice = function(){
            console.log("Device selected = ", vm.device);
        };

    }


})();

