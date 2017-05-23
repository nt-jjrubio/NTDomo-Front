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

    TemperaturesController.$inject = [];

    function TemperaturesController() {

        console.log("entra");
        var vm = this;
        vm.test = "Hola desde el controlador";
        vm.device = null;
        vm.setDevice = function (dev){
            vm.device = dev;
            console.log(dev);
            console.log(vm.device);
        };

    }


})();

